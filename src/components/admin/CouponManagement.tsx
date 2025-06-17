
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Copy } from "lucide-react";
import { toast } from "sonner";

interface Coupon {
  id: number;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrder: number;
  maxDiscount: number;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usedCount: number;
  status: 'active' | 'inactive' | 'expired';
}

const CouponManagement = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: 1,
      code: "WELCOME10",
      type: "percentage",
      value: 10,
      minOrder: 500,
      maxDiscount: 200,
      validFrom: "2024-01-01",
      validTo: "2024-12-31",
      usageLimit: 100,
      usedCount: 25,
      status: "active"
    },
    {
      id: 2,
      code: "UNIFORM50",
      type: "fixed",
      value: 50,
      minOrder: 1000,
      maxDiscount: 50,
      validFrom: "2024-01-01",
      validTo: "2024-06-30",
      usageLimit: 50,
      usedCount: 12,
      status: "active"
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    type: "percentage",
    value: "",
    minOrder: "",
    maxDiscount: "",
    validFrom: "",
    validTo: "",
    usageLimit: "",
    status: "active"
  });

  const handleAddCoupon = () => {
    const newCoupon: Coupon = {
      id: Date.now(),
      code: formData.code,
      type: formData.type as 'percentage' | 'fixed',
      value: parseFloat(formData.value),
      minOrder: parseFloat(formData.minOrder),
      maxDiscount: parseFloat(formData.maxDiscount),
      validFrom: formData.validFrom,
      validTo: formData.validTo,
      usageLimit: parseInt(formData.usageLimit),
      usedCount: 0,
      status: formData.status as 'active' | 'inactive' | 'expired'
    };

    setCoupons([...coupons, newCoupon]);
    setIsAddModalOpen(false);
    resetForm();
    toast.success("Coupon added successfully!");
  };

  const resetForm = () => {
    setFormData({
      code: "",
      type: "percentage",
      value: "",
      minOrder: "",
      maxDiscount: "",
      validFrom: "",
      validTo: "",
      usageLimit: "",
      status: "active"
    });
  };

  const handleDeleteCoupon = (id: number) => {
    setCoupons(coupons.filter(c => c.id !== id));
    toast.success("Coupon deleted successfully!");
  };

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Coupon code copied to clipboard!");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-school-green">Coupon Management</h2>
          <p className="text-gray-600">Create and manage discount coupons</p>
        </div>
        
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-school-green hover:bg-school-brown">
              <Plus size={16} className="mr-2" />
              Add Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Coupon</DialogTitle>
              <DialogDescription>
                Add a new discount coupon for your store
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="code">Coupon Code</Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
                  placeholder="e.g., SAVE20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Discount Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="value">
                    {formData.type === 'percentage' ? 'Discount Percentage (%)' : 'Discount Amount (₹)'}
                  </Label>
                  <Input
                    id="value"
                    type="number"
                    value={formData.value}
                    onChange={(e) => setFormData({...formData, value: e.target.value})}
                    placeholder={formData.type === 'percentage' ? '10' : '50'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="minOrder">Minimum Order Amount (₹)</Label>
                  <Input
                    id="minOrder"
                    type="number"
                    value={formData.minOrder}
                    onChange={(e) => setFormData({...formData, minOrder: e.target.value})}
                    placeholder="500"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="maxDiscount">Maximum Discount (₹)</Label>
                  <Input
                    id="maxDiscount"
                    type="number"
                    value={formData.maxDiscount}
                    onChange={(e) => setFormData({...formData, maxDiscount: e.target.value})}
                    placeholder="200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="validFrom">Valid From</Label>
                  <Input
                    id="validFrom"
                    type="date"
                    value={formData.validFrom}
                    onChange={(e) => setFormData({...formData, validFrom: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="validTo">Valid To</Label>
                  <Input
                    id="validTo"
                    type="date"
                    value={formData.validTo}
                    onChange={(e) => setFormData({...formData, validTo: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="usageLimit">Usage Limit</Label>
                  <Input
                    id="usageLimit"
                    type="number"
                    value={formData.usageLimit}
                    onChange={(e) => setFormData({...formData, usageLimit: e.target.value})}
                    placeholder="100"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleAddCoupon}
                className="bg-school-green hover:bg-school-brown"
              >
                Create Coupon
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Coupon Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coupons.length}</div>
            <p className="text-xs text-gray-500">All coupons</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {coupons.filter(c => c.status === 'active').length}
            </div>
            <p className="text-xs text-gray-500">Currently usable</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {coupons.reduce((sum, c) => sum + c.usedCount, 0)}
            </div>
            <p className="text-xs text-gray-500">Times used</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">₹12,450</div>
            <p className="text-xs text-gray-500">Customer savings</p>
          </CardContent>
        </Card>
      </div>

      {/* Coupons Table */}
      <Card>
        <CardHeader>
          <CardTitle>Coupon List</CardTitle>
          <CardDescription>Manage all your discount coupons</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Min Order</TableHead>
                <TableHead>Valid Period</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold">{coupon.code}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyCouponCode(coupon.code)}
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {coupon.type === 'percentage' ? 'Percentage' : 'Fixed'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {coupon.type === 'percentage' ? `${coupon.value}%` : `₹${coupon.value}`}
                    {coupon.maxDiscount > 0 && (
                      <div className="text-xs text-gray-500">Max: ₹{coupon.maxDiscount}</div>
                    )}
                  </TableCell>
                  <TableCell>₹{coupon.minOrder}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{coupon.validFrom}</div>
                      <div className="text-gray-500">to {coupon.validTo}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{coupon.usedCount} / {coupon.usageLimit}</div>
                      <div className="text-gray-500">
                        {Math.round((coupon.usedCount / coupon.usageLimit) * 100)}% used
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(coupon.status)}>
                      {coupon.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteCoupon(coupon.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouponManagement;
