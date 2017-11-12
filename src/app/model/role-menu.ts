/**
 * Route for a menu item
 */
export class MenuItem {
    title: string;
    link: string;
}
/**
 * A collection of menu items
 */
export class MenuGroup {
    groupName: string;
    items: MenuItem[];
}
/**
 * A collection of menu groups appropriate to a role
 */
export class RoleMenu {
    id: number;
    role: string;
    menuGroups: MenuGroup[]
}