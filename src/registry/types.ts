import React from "react";

export interface ComponentVariant {
  id: string;
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  usage: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  variants: ComponentVariant[];
}
