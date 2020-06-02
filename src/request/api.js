/**
 * api接口统一管理
 */
import { get, post } from "./http";

//@param {Object} args
export const allBlog = (args) => get("/api", args);
