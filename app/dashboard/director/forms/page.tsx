"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CalendarDays, Plus, FileText, Users, Trash2, Edit, Eye, Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function DirectorForms() {
  const { toast } = useToast();
  const [isCreatingForm, setIsCreatingForm] = useState(false);

  // Sample data for forms
  const forms = [
    {
      id: "1",
      title: "Registration for Summer Internship Program",
      description: "All B.Tech 3rd year students are invited to register for the Summer Internship Program. The registration deadline is May 15, 2025.",
      targetAudience: "students",
      department: "All Departments",
      batch: "2021-2025",
      startDate: "2025-04-30",
      endDate: "2025-05-15",
      status: "published",
      submissions: 87,
      fields: [
        { id: "f1", label: "Full Name", type: "text", required: true },
        { id: "f2", label: "Roll Number", type: "text", required: true },
        { id: "f3", label: "Email", type: "text", required: true },
        { id: "f4", label: "Preferred Company/Domain", type: "text", required: true },
        { id: "f5", label: "Resume", type: "file", required: true },
        { id: "f6", label: "Statement of Purpose", type: "textarea", required: true },
      ],
    },
    {
      id: "2",
      title: "Faculty Feedback Form",
      description: "Collect feedback from students about faculty teaching methods and course content.",
      targetAudience: "students",
      department: "Computer Science & Engineering",
      batch: "All Batches",
      startDate: "2025-05-01",
      endDate: "2025-05-10",
      status: "published",
      submissions: 45,
      fields: [
        { id: "f1", label: "Course Code", type: "text", required: true },
        { id: "f2", label: "Faculty Name", type: "text", required: true },
        { id: "f3", label: "Teaching Quality", type: "select", required: true, options: ["Excellent", "Good", "Average", "Poor"] },
        { id: "f4", label: "Course Content Quality", type: "select", required: true, options: ["Excellent", "Good", "Average", "Poor"] },
        { id: "f5", label: "Additional Comments", type: "textarea", required: false },
      ],
    },
    {
      id: "3",
      title: "Research Grant Application",
      description: "Faculty members can apply for research grants for the academic year 2025-26.",
      targetAudience: "teachers",
      department: "All Departments",
      startDate: "2025-04-15",
      endDate: "2025-05-30",
      status: "published",
      submissions: 12,
      fields: [
        { id: "f1", label: "Faculty Name", type: "text", required: true },
        { id: "f2", label: "Department", type: "text", required: true },
        { id: "f3", label: "Research Topic", type: "text", required: true },
        { id: "f4", label: "Grant Amount Required", type: "number", required: true },
        { id: "f5", label: "Research Proposal", type: "file", required: true },
        { id: "f6", label: "Budget Breakdown", type: "file", required: true },
        { id: "f7", label: "Expected Outcomes", type: "textarea", required: true },
      ],
    },
    {
      id: "4",
      title: "Annual Sports Event Registration",
      description: "Registration for the annual sports event to be held from June 1-5, 2025.",
      targetAudience: "all",
      department: "All Departments",
      batch: "All Batches",
      startDate: "2025-05-01",
      endDate: "2025-05-20",
      status: "draft",
      submissions: 0,
      fields: [
        { id: "f1", label: "Name", type: "text", required: true },
        { id: "f2", label: "Roll Number/Employee ID", type: "text", required: true },
        { id: "f3", label: "Department", type: "text", required: true },
        { id: "f4", label: "Sports Events", type: "checkbox", required: true, options: ["Cricket", "Football", "Basketball", "Volleyball", "Athletics", "Chess"] },
        { id: "f5", label: "Previous Experience", type: "textarea", required: false },
      ],
    },
  ];

  // Handle form creation
  const handleCreateForm = () => {
    toast({
      title: "Form Created",
      description: "The form has been created successfully.",
    });
    setIsCreatingForm(false);
  };

  // Handle form publishing
  const handlePublishForm = (formId: string) => {
    toast({
      title: "Form Published",
      description: "The form has been published and is now available to the target audience.",
    });
  };

  // Handle form deletion
  const handleDeleteForm = (formId: string) => {
    toast({
      title: "Form Deleted",
      description: "The form has been deleted successfully.",
    });
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Forms Management</h2>
        <Button onClick={() => setIsCreatingForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create New Form
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Forms</TabsTrigger>
          <TabsTrigger value="draft">Draft Forms</TabsTrigger>
          <TabsTrigger value="archived">Archived Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {forms.filter(form => form.status === "published").map((form) => (
              <Card key={form.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{form.title}</CardTitle>
                    <Badge>Active</Badge>
                  </div>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>Target: {form.targetAudience === "all" ? "Everyone" : form.targetAudience === "students" ? "Students" : "Teachers"}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{form.submissions} submissions</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>
                          {new Date(form.startDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })} - {new Date(form.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    {form.department && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Department: </span>
                        <span>{form.department}</span>
                      </div>
                    )}

                    {form.batch && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Batch: </span>
                        <span>{form.batch}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Responses
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {forms.filter(form => form.status === "draft").map((form) => (
              <Card key={form.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{form.title}</CardTitle>
                    <Badge variant="outline">Draft</Badge>
                  </div>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>Target: {form.targetAudience === "all" ? "Everyone" : form.targetAudience === "students" ? "Students" : "Teachers"}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>
                          {new Date(form.startDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })} - {new Date(form.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    {form.department && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Department: </span>
                        <span>{form.department}</span>
                      </div>
                    )}

                    {form.batch && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Batch: </span>
                        <span>{form.batch}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button onClick={() => handlePublishForm(form.id)}>
                    Publish Form
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteForm(form.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <div className="flex items-center justify-center h-40 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground">No archived forms found</p>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isCreatingForm} onOpenChange={setIsCreatingForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              Create a new form to collect information from students, teachers, or both.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Form Title</Label>
              <Input id="title" placeholder="Enter form title" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter form description" rows={3} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="target">Target Audience</Label>
                <Select>
                  <SelectTrigger id="target">
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="students">Students</SelectItem>
                    <SelectItem value="teachers">Teachers</SelectItem>
                    <SelectItem value="all">Everyone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                    <SelectItem value="ece">Electronics & Communication</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="ce">Civil Engineering</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Form Fields</Label>
              <div className="border rounded-md p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Field 1</h3>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="field-label">Field Label</Label>
                  <Input id="field-label" placeholder="Enter field label" defaultValue="Full Name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="field-type">Field Type</Label>
                    <Select defaultValue="text">
                      <SelectTrigger id="field-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="select">Dropdown</SelectItem>
                        <SelectItem value="checkbox">Checkbox</SelectItem>
                        <SelectItem value="radio">Radio Button</SelectItem>
                        <SelectItem value="file">File Upload</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="textarea">Text Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="required" defaultChecked />
                      <Label htmlFor="required">Required Field</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsCreatingForm(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateForm}>
              Create Form
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
