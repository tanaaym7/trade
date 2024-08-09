import {
  Tag,
  CircleUserRound,
  Settings,
  Users,
  Rss,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/profile",
          label: "Profile",
          active: pathname.includes("/profile"),
          icon: CircleUserRound,
          submenus: []
        },
        {
          href: "/topinvestor",
          label: "Top Investor",
          active: pathname.includes("/topinvestor"),
          icon: Users,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Communities",
      menus: [
        {
          href: "/channels",
          label: "Channels",
          active: pathname.includes("/channels"),
          icon: Rss,
          submenus: [
            {
              href: "/channels",
              label: "channel 1",
              active: false
            },
            {
              href: "/channels",
              label: "channel 2",
              active: false
            }
          ]
        },
        {
          href: "/groups",
          label: "Groups",
          active: pathname.includes("/groups"),
          icon: Users,
          submenus: [
            {
              href: "/groups",
              label: "group 1",
              active: pathname === "/groups"
            },
            {
              href: "/groups",
              label: "group 2",
              active: pathname === "/groups"
            }
          ]
        }
      ]
    }
    // {
    //   groupLabel: "Settings",
    //   menus: [
    //     {
    //       href: "/users",
    //       label: "Users",
    //       active: pathname.includes("/users"),
    //       icon: Users,
    //       submenus: []
    //     },
    //     {
    //       href: "/account",
    //       label: "Account",
    //       active: pathname.includes("/account"),
    //       icon: Settings,
    //       submenus: []
    //     }
    //   ]
    // }
  ];
}
