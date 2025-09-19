import type { BreadcrumbItem as BreadcrumbItemType } from '@/types/breadcrumb';

import * as React from 'react';

import { FaHouse } from 'react-icons/fa6';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Container } from '@/components/ui/container';

type PageHeaderProps = {
  title: string;
  breadcrumbs: BreadcrumbItemType[];
};

function PageHeader({ title, breadcrumbs }: Readonly<PageHeaderProps>) {
  return (
    <Container className="mt-16 lg:mt-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <FaHouse className="size-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((breadcrumb, idx) => {
            const item = breadcrumb.url ? (
              <BreadcrumbItem>
                <BreadcrumbLink href={breadcrumb.url}>
                  {breadcrumb.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumb.text}</BreadcrumbPage>
              </BreadcrumbItem>
            );

            return (
              <React.Fragment key={`breadcrumb-${idx}`}>
                {breadcrumbs.length > idx ? <BreadcrumbSeparator /> : null}
                {item}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-8 mb-12 text-4xl font-bold capitalize">{title}</h1>
    </Container>
  );
}

export { PageHeader };
