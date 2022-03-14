import { authStatusEnum } from "../enums";

export interface ISiteAuditLog {
  id: string;
  siteId: string;
  createdBy: string;
  createdAt: string;
  updatedBy?: string;
  updatedAt?: string;
  authStatus: authStatusEnum
};


