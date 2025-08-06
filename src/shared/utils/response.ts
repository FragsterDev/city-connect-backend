export type SuccessResponse<T> = {
  status: "success";
  code: number;
  page?: number;
  limit?: number;
  body: T;
};

export type ErrorResponse = {
  status: "error";
  code: number;
  message: string;
};

export function success<T>(
  code: number,
  body: T,
  page?: number,
  limit?: number
): SuccessResponse<T> {
  const response = {
    status: "success" as const,
    code,
    ...(page !== undefined && { page }),
    ...(limit !== undefined && { limit }),
    body,
  };

  return response;
}

export function error(code: number, message: string): ErrorResponse {
  return {
    status: "error",
    code,
    message,
  };
}
