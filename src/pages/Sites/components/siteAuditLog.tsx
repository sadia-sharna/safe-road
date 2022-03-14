import React from 'react'
import { ISiteAuditLog } from '../../../core';
import { authStatusEnum } from '../../../core/enums';
import { SITES_AUDIT_LOG_STORAGE } from '../../../services';

export default function SiteAuditLog(props: any) {
    console.log(props);
    let logData = localStorage.getItem(SITES_AUDIT_LOG_STORAGE);
    let logs = logData != null ? JSON.parse(logData) : [];
    let findLogsforSite: ISiteAuditLog = logs.find((log: any) => log.siteId === props.selectedSite.id);

    return (<>
        {/* {findLogsforSite && findLogsforSite.map((x: ISiteAuditLog) => {
            return (<div>
                {x.authStatus === authStatusEnum?.Create ? `${x.createdAt} by ${x.createdBy}` : null}
                {x.authStatus === authStatusEnum?.Update ? `${x.updatedAt} by ${x.updatedBy}` : null}

            </div>)
        })} */}
        <div className="card bg-light" >
            <div className="card-body">
                <h6 className="card-title">Audit Log</h6>
                <hr />
                {/* <div className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>

                <div className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</div> */}
                {findLogsforSite &&
                    <>
                        <div>
                            {/* created by samon on 2/1/2020, 12:00:00 AM <br /> */}
                            {(findLogsforSite.authStatus === authStatusEnum?.Create
                                || findLogsforSite.authStatus === authStatusEnum?.Update)
                                ? `Created by ${findLogsforSite.createdBy} on ${findLogsforSite.createdAt} `
                                : null}
                        </div>
                        <div>
                            {findLogsforSite.authStatus === authStatusEnum?.Update
                                ? `Updated by ${findLogsforSite.updatedBy} on ${findLogsforSite.updatedAt} `
                                : null}

                        </div>
                    </>
                }

            </div>
        </div>

    </>)
}
