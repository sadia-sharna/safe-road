import moment from "moment";
import { v4 } from "uuid";
import { ISignup, ISite, ISiteAuditLog } from "../core";
import { authStatusEnum } from "../core/enums";

export const SITES_STORAGE = "Sites";
export const SITES_AUDIT_LOG_STORAGE = "Sites-Audit-Log";

export const CreateSite = (model: ISite, currentUser: ISignup) => {
    const siteLogId = v4();

    let siteAuditLogModel: ISiteAuditLog = {
        id: siteLogId,
        siteId: model.id,
        createdBy: currentUser?.name,
        createdAt: moment().format("DD/MM/YYYY HH:mm:ss"),
        authStatus: authStatusEnum.Create
    };

    let data = localStorage.getItem(SITES_STORAGE);
    let sites = data != null ? JSON.parse(data) : [];
    let logData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    let logs = logData != null ? JSON.parse(logData) : [];


    localStorage.setItem(SITES_STORAGE, JSON.stringify([...sites, model]));
    localStorage.setItem(SITES_AUDIT_LOG_STORAGE, JSON.stringify([...logs, siteAuditLogModel]));
}
export const UpdateSite = (model: ISite, currentUser: ISignup) => {
    let logsData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    let logss = logsData != null ? JSON.parse(logsData) : [];
    let findLogsforSite: ISiteAuditLog = logss.find((log: any) => log.siteId === model.id);
    var foundIndex = logss.findIndex((x: any) => x.siteId === model.id);


    let siteAuditLogModel: ISiteAuditLog = {
        id: findLogsforSite?.id,
        siteId: findLogsforSite?.siteId,
        createdBy: findLogsforSite?.createdBy,
        createdAt: findLogsforSite?.createdAt,
        updatedBy: currentUser?.name,
        updatedAt: moment().format("DD/MM/YYYY HH:mm:ss"),
        authStatus: authStatusEnum.Update
    };
    logss[foundIndex] = siteAuditLogModel;

    let data = localStorage.getItem(SITES_STORAGE);
    let sites = data != null ? JSON.parse(data) : [];
    var foundSite = sites.findIndex((x: any) => x.id === model.id);
    sites[foundSite] = model;


    // let logData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    // let logs = logData != null ? JSON.parse(logData) : [];


    localStorage.setItem(SITES_STORAGE, JSON.stringify(sites));
    localStorage.setItem(SITES_AUDIT_LOG_STORAGE, JSON.stringify(logss));


}