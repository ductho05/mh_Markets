import { APP_NAME } from "@/utils/constants"

export const metadata = {
    title: `Apply for samename account-${APP_NAME}`
}

function MtOpenAccountLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default MtOpenAccountLayout