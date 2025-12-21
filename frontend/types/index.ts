export interface Message {
  role: "user" | "model";
  content: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: number;
}

export type SidebarTab = "explore" | "categories" | "library" | "settings";
