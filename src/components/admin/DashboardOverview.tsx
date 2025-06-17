
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, CreditCard, TrendingUp, AlertTriangle } from "lucide-react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Products",
      value: "48",
      description: "5 added this week",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Total Orders",
      value: "324",
      description: "23 pending orders",
      icon: ShoppingCart,
      color: "text-green-600"
    },
    {
      title: "Customers",
      value: "156",
      description: "12 new this month",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Revenue",
      value: "₹45,890",
      description: "+12% from last month",
      icon: CreditCard,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    { id: 1, action: "New order received", time: "2 hours ago", type: "order" },
    { id: 2, action: "Product stock updated", time: "4 hours ago", type: "product" },
    { id: 3, action: "Payment received", time: "6 hours ago", type: "payment" },
    { id: 4, action: "New customer registered", time: "1 day ago", type: "customer" }
  ];

  const lowStockProducts = [
    { name: "School Uniform (Summer)", stock: 8, category: "Uniforms" },
    { name: "Textbook Set - Grade 3", stock: 5, category: "Books" },
    { name: "Sports Shoes", stock: 3, category: "Accessories" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-school-green">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening in your store.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    activity.type === 'order' ? 'bg-green-100 text-green-800' :
                    activity.type === 'product' ? 'bg-blue-100 text-blue-800' :
                    activity.type === 'payment' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Low Stock Alert
            </CardTitle>
            <CardDescription>Products running low on inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">{product.stock} left</p>
                    <p className="text-xs text-gray-500">Restock needed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
