interface ApiHeaderOptions {
  method: "POST" | "GET" | "DELETE";
  headers: {
    accept: string;
    Authorization: string;
  };
}

export const apiHeaders = () => {
  const token: string | undefined = process.env.token;
  const options: ApiHeaderOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return options;
};
