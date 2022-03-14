import moment from "moment";
import { v4 } from "uuid";
import { ISignup, ISiteAuditLog } from "../core";
import { authStatusEnum } from "../core/enums";

export const SITES_AUDIT_LOG_STORAGE = "Sites-Audit-Log";

export const CreateSiteAuditLog = (siteId: string, currentUser: ISignup) => {

    const siteAuditLogModel: ISiteAuditLog = {
        id: v4(),
        siteId: siteId,
        createdBy: currentUser?.name,
        createdAt: moment().format("DD/MM/YYYY, hh:mm:ss A"),
        authStatus: authStatusEnum.Create
    };

    const siteAuditLogList = GetSiteAuditLogList();
    localStorage.setItem(SITES_AUDIT_LOG_STORAGE,
        JSON.stringify([...siteAuditLogList, siteAuditLogModel]));
}
export const UpdateSiteAuditLog = (siteId: string, currentUser: ISignup) => {
    const siteAuditLogList = GetSiteAuditLogList();

    const findLogBySiteId: ISiteAuditLog =
        siteAuditLogList.find((log: any) => log.siteId === siteId);
    var index = siteAuditLogList.findIndex((x: any) => x.siteId === siteId);

    const siteAuditLogModel: ISiteAuditLog = {
        ...findLogBySiteId,
        updatedBy: currentUser?.name,
        updatedAt: moment().format("DD/MM/YYYY, hh:mm:ss A"),
        authStatus: authStatusEnum.Update
    };
    siteAuditLogList[index] = siteAuditLogModel;
    localStorage.setItem(SITES_AUDIT_LOG_STORAGE, JSON.stringify(siteAuditLogList));

}

export const GetSiteAuditLogList = () => {
    const siteAuditLogStorageData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    const siteAuditLogList = siteAuditLogStorageData != null
        ? JSON.parse(siteAuditLogStorageData)
        : [];
    return siteAuditLogList;
};
