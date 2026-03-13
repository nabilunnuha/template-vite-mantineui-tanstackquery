import API from "../api/api";

/* ================= TYPES ================= */

export type AccountFile = string;
export type AccountId = string;
export type OrderId = string;

export interface Account {
  id: AccountId;
  username: string;
  chatCount: number;
  orderCount: number;
  online: boolean;
}

export interface AccountOrder {
  id: OrderId;
  accountId: AccountId;
  chatCount: number;
  orderCount: number;
  status?: string;
}

export interface AccountOpenStatus {
  opened: boolean;
}

/* ================= SERVICE ================= */

export const AccountService = {
  /** GET /accounts/files */
  async getFiles(): Promise<AccountFile[]> {
    const { data } = await API.get("/accounts/files");
    return data;
  },

  /** GET /accounts?file=xxx */
  async getIdsByFile(file: AccountFile): Promise<AccountId[]> {
    const { data } = await API.get("/accounts", {
      params: { file },
    });
    return data;
  },

  /** GET /accounts/:id */
  async getDetail(accountId: AccountId): Promise<Account> {
    const { data } = await API.get(`/accounts/${accountId}`);
    return data;
  },

  /** GET /accounts/:id/open */
  async getOpenStatus(accountId: AccountId): Promise<AccountOpenStatus> {
    const { data } = await API.get(`/accounts/${accountId}/open`);
    return data;
  },

  /** GET /accounts/:id/orders */
  async getOrderIds(accountId: AccountId): Promise<OrderId[]> {
    const { data } = await API.get(`/accounts/${accountId}/orders`);
    return data;
  },

  /** GET /accounts/:id/orders/:orderId */
  async getOrderDetail(
    accountId: AccountId,
    orderId: OrderId,
  ): Promise<AccountOrder> {
    const { data } = await API.get(`/accounts/${accountId}/orders/${orderId}`);
    return data;
  },
};
