import { DollarOutlined, FundProjectionScreenOutlined, HomeOutlined, IdcardOutlined, PlusCircleOutlined, ProfileOutlined, RedEnvelopeOutlined, ToolOutlined, TransactionOutlined } from "@ant-design/icons"

const routes = {
    login: "/login",
    forget_password: "/findPwd",
    register: "/register",
    sidebars: [
        {
            name: "Home",
            path: "/",
            icon: <HomeOutlined className="text-red-500" />
        },
        {
            name: "My Account",
            path: "/myAccount",
            icon: <IdcardOutlined className="text-red-500" />
        },
        {
            name: "New Account",
            path: "/mtOpenAccount",
            icon: <PlusCircleOutlined className="text-red-500" />
        },
        {
            name: "Application record",
            path: "/applicationHistory",
            icon: <RedEnvelopeOutlined className="text-red-500" />
        },
        {
            name: "Deposit",
            path: "/deposit",
            icon: <DollarOutlined className="text-red-500" />
        },
        {
            name: "Withdraw",
            path: "/withdrawal",
            icon: <ProfileOutlined className="text-red-500" />
        },
        {
            name: "Fund records",
            path: "/fundRecords",
            icon: <FundProjectionScreenOutlined className="text-red-500" />
        },
        {
            name: "Transaction records",
            path: "/tradingRecord",
            icon: <TransactionOutlined className="text-red-500" />
        },
        {
            name: "Settings",
            path: "/my",
            icon: <ToolOutlined className="text-red-500" />
        }
    ],
    dropDown: [
        {
            name: 'Profile',
            path: '/my'
        },
        {
            name: 'Change Password',
            path: '/changePwd'
        },
        {
            name: 'My Bank Card',
            path: '/bankCard'
        },
        {
            name: 'Account Opening Link',
            path: '/promote'
        },
        {
            name: 'Account Security Settings',
            path: '/changePwd'
        },
        {
            name: 'Logout',
            path: '/'
        },
    ]
}

export default routes