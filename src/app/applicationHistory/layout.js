import { APP_NAME } from "@/utils/constants"

export const metadata = {
    title: `Application Record-${APP_NAME}`
}

function ApplicationHistoryLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default ApplicationHistoryLayout