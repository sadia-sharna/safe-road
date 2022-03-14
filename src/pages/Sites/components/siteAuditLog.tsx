import React from 'react'
import { ISiteAuditLog } from '../../../core';
import { authStatusEnum } from '../../../core/enums';
import { GetSiteAuditLogList, SITES_AUDIT_LOG_STORAGE } from '../../../services';

type IProps = {
    selectedSite: any;
};
export default function SiteAuditLog(props: IProps) {

    const { selectedSite } = props;
    const siteAuditLogList = GetSiteAuditLogList();
    const siteAuditLog: ISiteAuditLog =
        siteAuditLogList.find((log: ISiteAuditLog) => log.siteId === selectedSite?.id);

    return (<>

        <div className="card bg-light" >
            <div className="card-body">
                <h6 className="card-title">Audit Log</h6>
                <hr />
                {siteAuditLog &&
                    <>
                        <div className='fs-6'>
                            {`Created by ${siteAuditLog.createdBy} on ${siteAuditLog.createdAt} `}
                        </div>
                        <div className='fs-6'>
                            {siteAuditLog.authStatus === authStatusEnum?.Update
                                ? `Updated by ${siteAuditLog.updatedBy} on ${siteAuditLog.updatedAt} `
                                : null}

                        </div>
                    </>
                }

            </div>
        </div>

    </>)
}
