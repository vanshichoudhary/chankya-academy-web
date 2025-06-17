
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Download, RefreshCw } from "lucide-react";

const PaymentManagement = () => {
  const [payments] = useState([
    {
      id: "PAY-001",
      orderId: "ORD-001",
      customer: "Rahul Sharma",
      amount: 2050,
      method: "UPI",
      status: "completed",
      date: "2024-01-15",
      transactionId: "TXN123456789"
    },
    {
      id: "PAY-002",
      orderId: "ORD-002",
      customer: "Priya Singh",
      amount: 1700,
      method: "Credit Card",
      status: "completed",
      date: "2024-01-14",
      transactionId: "TXN123456790"
    },
    {
      id: "PAY-003",
      orderId: "ORD-003",
      customer: "Amit Kumar",
      amount: 1700,
      method: "Bank Transfer",
      status: "pending",
      date: "2024-01-13",
      transactionId: "TXN123456791"
    },
    {
      id: "PAY-004",
      orderId: "ORD-004",
      customer: "Sneha Patel",
      amount: 450,
      method: "Cash",
      status: "completed",
      date: "2024-01-12",
      transactionId: "TXN123456792"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'UPI': return 'bg-purple-100 text-purple-800';
      case 'Credit Card': return 'bg-blue-100 text-blue-800';
      case 'Bank Transfer': return 'bg-green-100 text-green-800';
      case 'Cash': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-school-green">Payment Management</h2>
          <p className="text-gray-600">Track and manage payment transactions</p>
        </div>
        <Button className="bg-school-green hover:bg-school-brown">
          <Download size={16} className="mr-2" />
          Export Report
        </Button>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,890</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">298</div>
            <p className="text-xs text-gray-500">92% success rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">15</div>
            <p className="text-xs text-gray-500">Awaiting confirmation</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">11</div>
            <p className="text-xs text-gray-500">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods Distribution</CardTitle>
          <CardDescription>Popular payment methods used by customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">45%</div>
              <p className="text-sm text-gray-600">UPI</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">30%</div>
              <p className="text-sm text-gray-600">Credit Card</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">20%</div>
              <p className="text-sm text-gray-600">Bank Transfer</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">5%</div>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>Track all payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.orderId}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{payment.customer}</div>
                      <div className="text-sm text-gray-500">{payment.transactionId}</div>
                    </div>
                  </TableCell>
                  <TableCell>₹{payment.amount}</TableCell>
                  <TableCell>
                    <Badge className={getMethodColor(payment.method)}>
                      {payment.method}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye size={14} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <RefreshCw size={14} />
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

export default PaymentManagement;
