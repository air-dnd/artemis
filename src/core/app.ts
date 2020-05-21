/**
 * @module core.app
 * This module describes the core express application.
 */
import express from "express";
import * as STATUS_CODES from "./http/statusCodes";

/**
 * Generates express.Application instance.
 * @return {express.Application}
 * TODO: Make application generation configurable and environment specific
 */
function buildApplication(): express.Application {
  const app = express();
  // TODO: Remove in favor of named router modules
  app.use("/", (req, res) => {
    res.sendStatus(STATUS_CODES.OK);
  });
  return app;
}

export default buildApplication;
