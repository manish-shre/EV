import React from 'react';
import { Breadcrumbs} from "../Components/Breadcrumbs";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';

const Breadcrumbs = ({ links, current }) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {links.map((link, index) => (
        <Link
          key={index}
          underline="hover"
          color="white"
          href={link.href}
          className="text-[16px] sm:text-[18px]"
        >
          {link.label}
        </Link>
      ))}
      <Typography color="white" className="text-[16px] sm:text-[18px] font-medium">
        {current}
      </Typography>
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;