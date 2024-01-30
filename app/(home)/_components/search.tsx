"use client";
// precisa ser um client component pois terá interatividade
import React from "react";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return <div className="flex items-center gap-2">
    <Input placeholder="Buscar"/>
    <Button variant="default" size="icon">
      <SearchIcon size={18}/>
    </Button>
  </div>;
};

export default Search;
