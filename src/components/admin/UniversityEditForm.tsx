
import React from "react";
import { UniversityDetail } from "@/types/universityTypes";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Save } from "lucide-react";

const universityFormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name ist erforderlich"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
  location: z.string().min(1, "Standort ist erforderlich"),
  imageUrl: z.string().url("Gültige URL erforderlich"),
  type: z.string(),
  applicationDeadline: z.string(),
  websiteUrl: z.string().url("Gültige URL erforderlich"),
  languageRequirements: z.string(),
  requiredDocuments: z.array(z.string()),
  testRequirements: z.array(z.string()),
  semesterAvailability: z.array(z.string()),
  bundesland: z.string().optional(),
  status: z.string().optional(),
  kurse: z.string().optional(),
  email: z.string().email("Gültige E-Mail erforderlich").optional(),
  applicationTestDate: z.string().optional(),
  applicationMethod: z.string().optional(),
  address: z.string().optional(),
});

type UniversityFormValues = z.infer<typeof universityFormSchema>;

interface UniversityEditFormProps {
  university: UniversityDetail;
  onSave: (university: UniversityDetail) => void;
  onCancel: () => void;
}

const UniversityEditForm = ({ university, onSave, onCancel }: UniversityEditFormProps) => {
  const form = useForm<UniversityFormValues>({
    resolver: zodResolver(universityFormSchema),
    defaultValues: {
      ...university,
      // These fields need to be explicitly cast because they might be undefined in some cases
      requiredDocuments: university.requiredDocuments || [],
      testRequirements: university.testRequirements || [],
      semesterAvailability: university.semesterAvailability || [],
    },
  });

  const handleSubmit = (values: UniversityFormValues) => {
    onSave(values as UniversityDetail);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Standort</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Typ</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="bundesland"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bundesland</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="applicationDeadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bewerbungsfrist</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="applicationTestDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aufnahmetest-Datum</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="languageRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sprachanforderungen</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="websiteUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="kurse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kurse</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="applicationMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bewerbungsmethode</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Beschreibung</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bild URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Abbrechen
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Speichern
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UniversityEditForm;
