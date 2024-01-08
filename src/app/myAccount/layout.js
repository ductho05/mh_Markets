import { APP_NAME } from "@/utils/constants"

export const metadata = {
    title: `My Account-${APP_NAME}`
}

function MyAccountLayout({ children }) {
    return (
        <div>{children}</div>
    )
}

export default MyAccountLayout