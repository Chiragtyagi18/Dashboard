import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe } from "lucide-react"; 

const dummyData = [
  { title: "How to Improve Your Skills in League of Legends", keyword: "league of legends [2240000]", words: 4575, created: "20 hours ago" },
  { title: "How to Master Last Hitting", keyword: "league of legends [2240000]", words: 3480, created: "21 hours ago" },
  { title: "7 Tips for Better Teamplay", keyword: "league of legends [2240000]", words: 2676, created: "a day ago" },
  { title: "Top Virtual Executive Assistant Services (2024)", keyword: "virtual executive assistant [2900]", words: 2408, created: "1 Oct, 24" },
  { title: "Unlimited Graphics Design Solutions", keyword: "unlimited graphic design services [390]", words: 1793, created: "---" },
  { title: "Top Amazon Payment Methods", keyword: "amazon payment methods [3600]", words: 2647, created: "---" },
  { title: "Backlinks 101", keyword: "backlinks [8100]", words: 2261, created: "---" },
  { title: "7 Leading AI SEO Tools in 2024", keyword: "ai seo software [880]", words: 1543, created: "---" },
  { title: "Unlimited Graphic Design Services You Can Rely On", keyword: "unlimited graphic design services [390]", words: 1974, created: "---" },
];

interface DashboardProps {
  currentTab: string;
  searchQuery: string;
}

const Dashboard: React.FC<DashboardProps> = ({ currentTab, searchQuery }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = dummyData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{currentTab} List</h2>
      <Card>
        <CardContent>
          {loading ? (
            <Skeleton className="w-full h-64" />
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Article Title</TableHead>
                    <TableHead>Keyword [Traffic]</TableHead>
                    <TableHead>Words</TableHead>
                    <TableHead>Created On</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Publish</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.keyword}</TableCell>
                      <TableCell>{item.words}</TableCell>
                      <TableCell>{item.created}</TableCell>
                      <TableCell>
                        <Button variant="outline">View</Button>
                      </TableCell>
                      <TableCell>
  <span
    className="group relative cursor-pointer"
    aria-label="View on Wikipedia"
  >
    <Globe className="w-5 h-5 text-blue-500 group-hover:text-blue-700 transition-colors" />
    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      View on Wikipedia
    </span>
  </span>
</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <div>
                  Total <span className="font-medium">{filteredData.length}</span> Article Titles
                  <span className="ml-4">
                    | Show{" "}
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                    </select>{" "}
                    entries per page
                  </span>
                </div>
                <div>
                  <span className="inline-block border rounded px-2 py-1 bg-muted">1</span> / 1
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
