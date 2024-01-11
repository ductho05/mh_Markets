import { APP_NAME } from "@/utils/constants"

export const metadata = {
    title: `Deposit Application-${APP_NAME}`
}

function DepositLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default DepositLayout