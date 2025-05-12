
import React, { useState, useEffect } from "react";
import { Search, Filter, Download, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Resource type definition
interface Resource {
  id: string;
  type: "Report" | "PDF" | "Video" | "Innovation" | "Policy" | "Case Study" | "Whitepaper";
  title: string;
  publishedOn: Date;
  tags: string[];
  lovedBy: number;
  thumbnail: string;
  description: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const YLC = () => {
  // State for resources, filtering, pagination and modal
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [activeType, setActiveType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data for resources
  useEffect(() => {
    // This would normally be fetched from an API
    const mockResources: Resource[] = [
      {
        id: "1",
        type: "Report",
        title: "Uniford Innovation Report – 2024",
        publishedOn: new Date("2024-05-15"),
        tags: ["Uniford", "Policy", "Innovation"],
        lovedBy: 124,
        thumbnail: "/placeholder.svg",
        description: "This comprehensive report outlines the latest innovations in education technology and their implementation across Uniford Foundation's global network.",
        downloadUrl: "/reports/uniford-innovation-2024.pdf",
      },
      {
        id: "2",
        type: "PDF",
        title: "Student Grant Policy 2024",
        publishedOn: new Date("2024-04-22"),
        tags: ["Policy", "Grants"],
        lovedBy: 86,
        thumbnail: "/placeholder.svg",
        description: "Detailed guidelines for applying to the Uniford Foundation Student Grant Program, including eligibility criteria and application process.",
        downloadUrl: "/policies/student-grant-policy-2024.pdf",
      },
      {
        id: "3",
        type: "Video",
        title: "Innovation Talks by Youth 2025",
        publishedOn: new Date("2025-01-10"),
        tags: ["Talks", "Uniford"],
        lovedBy: 215,
        thumbnail: "/placeholder.svg",
        description: "A series of inspiring talks by young innovators from across the globe, sharing their journey and vision for a sustainable future.",
        externalUrl: "https://youtube.com/uniford-innovation-talks",
      },
      {
        id: "4",
        type: "Innovation",
        title: "Waterless Toilet Innovation",
        publishedOn: new Date("2025-03-20"),
        tags: ["Innovation", "Eco"],
        lovedBy: 178,
        thumbnail: "/placeholder.svg",
        description: "A groundbreaking innovation to address sanitation challenges in water-scarce regions, developed by Uniford student researchers.",
        downloadUrl: "/innovations/waterless-toilet.pdf",
      },
      {
        id: "5",
        type: "Report",
        title: "Uniford 2024 Annual Impact Report",
        publishedOn: new Date("2024-12-15"),
        tags: ["Impact", "Annual"],
        lovedBy: 132,
        thumbnail: "/placeholder.svg",
        description: "An overview of Uniford Foundation's global impact through various initiatives, partnerships, and student-led projects throughout 2024.",
        downloadUrl: "/reports/annual-impact-2024.pdf",
      },
      {
        id: "6",
        type: "Case Study",
        title: "Rural Education Transformation",
        publishedOn: new Date("2024-08-05"),
        tags: ["Education", "Rural", "Impact"],
        lovedBy: 94,
        thumbnail: "/placeholder.svg",
        description: "A case study examining the successful implementation of Uniford's educational model in rural communities across developing nations.",
        downloadUrl: "/case-studies/rural-education.pdf",
      },
      {
        id: "7",
        type: "Whitepaper",
        title: "The Future of Educational Technology",
        publishedOn: new Date("2024-07-18"),
        tags: ["EdTech", "Research", "Future"],
        lovedBy: 156,
        thumbnail: "/placeholder.svg",
        description: "A research paper exploring emerging trends in educational technology and their potential impact on global learning outcomes.",
        downloadUrl: "/whitepapers/future-edtech.pdf",
      },
      {
        id: "8",
        type: "Policy",
        title: "Digital Inclusion Policy Framework",
        publishedOn: new Date("2024-06-30"),
        tags: ["Policy", "Digital", "Inclusion"],
        lovedBy: 112,
        thumbnail: "/placeholder.svg",
        description: "A comprehensive policy framework aimed at ensuring digital inclusion across all Uniford Foundation programs and initiatives.",
        downloadUrl: "/policies/digital-inclusion.pdf",
      },
    ];
    setResources(mockResources);
    setFilteredResources(mockResources);
  }, []);

  // Filter resources based on type and search query
  useEffect(() => {
    let result = [...resources];

    if (activeType !== "All") {
      result = result.filter(resource => resource.type === activeType);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.tags.some(tag => tag.toLowerCase().includes(query)) ||
        resource.type.toLowerCase().includes(query)
      );
    }

    setFilteredResources(result);
    setCurrentPage(1);
  }, [activeType, searchQuery, resources]);

  // Handle resource card click
  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setIsDialogOpen(true);
  };

  // Get unique resource types for filter tabs
  const resourceTypes = ["All", ...Array.from(new Set(resources.map(r => r.type)))];

  // Pagination logic
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredResources.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <PageHeader
        title="Explore the Power of Ideas"
        subtitle="Find innovations, reports, media, and PDFs from Uniford Foundation"
        background="/placeholder.svg"
      />

      <div className="container mx-auto py-10 px-4">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col gap-6">
          <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10 py-6 text-base"
              placeholder="Search by keyword, type, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2" variant="ghost">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          {/* Type Filters */}
          <Tabs 
            defaultValue="All" 
            className="w-full"
            value={activeType}
            onValueChange={setActiveType}
          >
            <TabsList className="flex flex-wrap gap-1 h-auto p-1 justify-center">
              {resourceTypes.map((type) => (
                <TabsTrigger
                  key={type}
                  value={type}
                  className="data-[state=active]:bg-school-green data-[state=active]:text-white py-2 px-4"
                >
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentItems.map((resource) => (
            <Card 
              key={resource.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 cursor-pointer"
              onClick={() => handleResourceClick(resource)}
            >
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title}
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-2 left-2 bg-school-green text-white px-3 py-1 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
              </div>
              
              <CardContent className="pt-4 pb-2">
                <h3 className="text-lg font-bold line-clamp-2 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Published on {format(resource.publishedOn, "MMM dd, yyyy")}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {resource.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-0">
                <span className="text-xs text-gray-500">❤️ Loved by {resource.lovedBy}+ viewers</span>
                {resource.downloadUrl ? (
                  <Button variant="ghost" size="sm" className="gap-1" onClick={(e) => e.stopPropagation()}>
                    <Download className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only md:inline">Download</span>
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="gap-1" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only md:inline">View</span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {filteredResources.length > itemsPerPage && (
          <Pagination className="mb-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                // Show first page, last page, current page, and pages around current
                let pageNum = i + 1;
                if (totalPages > 5) {
                  if (currentPage <= 3) {
                    // Near start: show 1,2,3,4,...,last
                    if (i === 4) pageNum = totalPages;
                    else if (i === 3) return (
                      <PaginationItem key="ellipsis-1">
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  } else if (currentPage >= totalPages - 2) {
                    // Near end: show 1,...,last-3,last-2,last-1,last
                    if (i === 0) pageNum = 1;
                    else if (i === 1) return (
                      <PaginationItem key="ellipsis-2">
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                    else pageNum = totalPages - (4 - i);
                  } else {
                    // Middle: show 1,...,curr-1,curr,curr+1,...,last
                    if (i === 0) pageNum = 1;
                    else if (i === 1) return (
                      <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                    else if (i === 3) return (
                      <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                    else if (i === 4) pageNum = totalPages;
                    else pageNum = currentPage + (i - 2);
                  }
                }

                return (
                  <PaginationItem key={`page-${pageNum}`}>
                    <PaginationLink
                      onClick={() => setCurrentPage(pageNum)}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* SEO Section */}
        <div className="mb-10">
          <SectionTitle
            title="Related Resources"
            subtitle="You may also be interested in these resources"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {resources.slice(0, 4).map((resource) => (
              <Card key={`related-${resource.id}`} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="pt-4 pb-2">
                  <p className="text-sm font-medium text-gray-500">{resource.type}</p>
                  <h4 className="font-medium line-clamp-2 text-sm mt-1">{resource.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="hidden">
          Explore Uniford Foundation's official innovation vault, PDF reports, case studies, student-led ideas, and videos at
          <a href="https://www.uniford.org">www.uniford.org</a>. Hashtags include #Uniford #UnifordFoundation #Innovation #Reports #Impact.
          Ranked globally for student and social innovation media.
        </div>
      </div>

      {/* Resource Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedResource && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedResource.title}</DialogTitle>
              </DialogHeader>
              
              <div className="aspect-video bg-gray-200 my-4 rounded-md overflow-hidden">
                <img 
                  src={selectedResource.thumbnail} 
                  alt={selectedResource.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Type</h4>
                  <p>{selectedResource.type}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Published On</h4>
                  <p>{format(selectedResource.publishedOn, "MMMM dd, yyyy")}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Description</h4>
                  <p className="text-gray-700">{selectedResource.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedResource.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">❤️ Loved by {selectedResource.lovedBy}+ viewers</span>
                  
                  {selectedResource.downloadUrl ? (
                    <Button className="gap-2" onClick={() => window.open(selectedResource.downloadUrl, "_blank")}>
                      <Download className="h-4 w-4" />
                      Download Resource
                    </Button>
                  ) : selectedResource.externalUrl ? (
                    <Button className="gap-2" onClick={() => window.open(selectedResource.externalUrl, "_blank")}>
                      <ExternalLink className="h-4 w-4" />
                      View Resource
                    </Button>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YLC;
