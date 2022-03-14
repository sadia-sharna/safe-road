import moment from "moment";
import { v4 } from "uuid";
import { ISignup, ISite, ISiteAuditLog } from "../core";
import { authStatusEnum } from "../core/enums";
import { CreateSiteAuditLog, UpdateSiteAuditLog } from "./siteAuditLogService";

export const SITES_STORAGE = "Sites";

export const CreateSite = (model: ISite, currentUser: ISignup) => {

    const siteList = GetSiteList();
    localStorage.setItem(SITES_STORAGE, JSON.stringify([...siteList, model]));
    CreateSiteAuditLog(model.id, currentUser);
};
export const UpdateSite = (model: ISite, currentUser: ISignup) => {

    const siteList = GetSiteList();
    var index = siteList.findIndex((x: any) => x.id === model.id);
    siteList[index] = model;

    localStorage.setItem(SITES_STORAGE, JSON.stringify(siteList));
    UpdateSiteAuditLog(model.id, currentUser);

};

export const GetSiteList = () => {
    const siteStorageData = localStorage.getItem(SITES_STORAGE);
    const siteList = siteStorageData != null ? JSON.parse(siteStorageData) : [];
    return siteList;
};
