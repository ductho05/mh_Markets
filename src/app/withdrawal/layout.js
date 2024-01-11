import { APP_NAME } from "@/utils/constants"

export const metadata = {
    title: `Withdrawal Application-${APP_NAME}`
}

function WithDrawalLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default WithDrawalLayout