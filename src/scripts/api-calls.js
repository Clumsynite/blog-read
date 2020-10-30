const apiUrl = "https://clumsy-blog.herokuapp.com";

export const ping = async () => {
  try {
    const res = await fetch(apiUrl);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const userLogin = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const userLogout = async () => {
  try {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getAllBlogs = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/blog/all`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const myProfile = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/user/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
