import React from 'react'
import { authStatusEnum, ISiteAuditLog } from '../../../core';
import { SITES_AUDIT_LOG_STORAGE } from '../../../services';

export default function SiteAuditLog(props: any) {
    console.log(props);
    let logData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    let logs = logData != null ? JSON.parse(logData) : [];
    let findLogsforSite: ISiteAuditLog[] = logs.filter((log: any) => log.siteId === props.selectedSite.id) || [];

    return (<>
        {findLogsforSite && findLogsforSite.map((x: ISiteAuditLog) => {
            return (<div>
                {x.authStatus === authStatusEnum?.Create ? `${x.createdAt} by ${x.createdBy}` : null}
                {x.authStatus === authStatusEnum?.Update ? `${x.updatedAt} by ${x.updatedBy}` : null}

            </div>)
        })}
    </>)
}
