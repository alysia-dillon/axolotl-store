import { PropsWithChildren } from "react";

import Typography, {
  TypographyVariant,
} from "@deps/components/typography/typography";

interface WorkflowCardProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  footerContent: JSX.Element;
  transactionNavigationButtonsClassname?: string;
}

const WorkflowCard = ({
  children,
  title,
  subtitle,
  footerContent,
}: WorkflowCardProps) => (
  <div className="">
    <div className="">
      <Typography
        // data-testid="workflow-card-title"
        variant={TypographyVariant.H1}
      >
        {title}
      </Typography>
      {!!subtitle && (
        <Typography variant={TypographyVariant.Body}>{subtitle}</Typography>
      )}
    </div>
    <div>{children}</div>
    {!!footerContent && <div className="flex gap-4">{footerContent}</div>}
  </div>
);

export default WorkflowCard;
