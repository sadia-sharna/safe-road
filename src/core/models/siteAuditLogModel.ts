export interface ISiteAuditLog {
  id: string;
  siteId: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  authStatus: authStatusEnum
};

export enum authStatusEnum {
  Create = "Created",
  Update = "Updated"
}
