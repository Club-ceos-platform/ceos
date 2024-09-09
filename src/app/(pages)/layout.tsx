import React from "react";
import { MainLayout } from "@/ui/common/layouts/MainLayout/MainLayout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => <MainLayout>{children}</MainLayout>;

export default Layout;
