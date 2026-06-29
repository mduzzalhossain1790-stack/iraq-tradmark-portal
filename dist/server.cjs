var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var apiKey = process.env.GEMINI_API_KEY;
var ai = null;
if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    console.log("Gemini GenAI client initialized successfully.");
  } catch (err) {
    console.error("Failed to initialize Gemini GenAI Client:", err);
  }
} else {
  console.log("No valid GEMINI_API_KEY found. Translation will run in high-quality local algorithmic simulation mode.");
}
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "50mb" }));
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var DATA_FILE = import_path.default.join(DATA_DIR, "trademarks.json");
var SEED_TRADEMARKS = [
  {
    id: "355079",
    proprietor: "MD UZZAL GROUP LTD",
    proprietorAr: "\u0645\u062C\u0645\u0648\u0639\u0629 \u0625\u0645 \u062F\u064A \u0623\u0648\u0632\u0627\u0644 \u0627\u0644\u0645\u062D\u062F\u0648\u062F\u0629",
    trademarkName: "MURASIL AL-GHARBIYA 1",
    trademarkNameAr: "\u0645\u0631\u0627\u0633\u0644 \u0627\u0644\u063A\u0631\u0628\u064A\u0629 \u0661",
    classNumber: 41,
    goodsServices: "News reporters services; news broadcasting; digital publishing; media photography and reporting services in the Western districts.",
    goodsServicesAr: "\u062E\u062F\u0645\u0627\u062A \u0645\u0631\u0627\u0633\u0644\u064A \u0627\u0644\u0623\u062E\u0628\u0627\u0631\u061B \u0628\u062B \u0627\u0644\u0623\u062E\u0628\u0627\u0631\u061B \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0631\u0642\u0645\u064A\u061B \u0627\u0644\u062A\u0635\u0648\u064A\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A \u0648\u062E\u062F\u0645\u0627\u062A \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0641\u064A \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u063A\u0631\u0628\u064A\u0629.",
    applicationDate: "2022-04-12",
    registrationDate: "2022-10-12",
    validityDate: "2032-10-12",
    address: "District 903, Al-Karrada, Baghdad, Iraq",
    addressAr: "\u062D\u064A \u0669\u0660\u0663\u060C \u0627\u0644\u0643\u0631\u0627\u062F\u0629\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 16655328e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "354120",
    proprietor: "AL-MANSOUR REFRESHMENTS LTD",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0646\u0635\u0648\u0631 \u0644\u0644\u0645\u0631\u0637\u0628\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u0648\u062F\u0629",
    trademarkName: "TIGRIS BLUE WATER",
    trademarkNameAr: "\u0645\u064A\u0627\u0647 \u062F\u062C\u0644\u0629 \u0627\u0644\u0632\u0631\u0642\u0627\u0621",
    classNumber: 32,
    goodsServices: "Mineral and aerated waters and other non-alcoholic beverages; fruit beverages and fruit juices; syrups and other preparations for making beverages.",
    goodsServicesAr: "\u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u063A\u0627\u0632\u064A\u0629 \u0648\u063A\u064A\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u063A\u064A\u0631 \u0627\u0644\u0643\u062D\u0648\u0644\u064A\u0629\u061B \u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0648\u0639\u0635\u0627\u0626\u0631 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u061B \u0627\u0644\u0634\u0631\u0627\u0628 \u0648\u063A\u064A\u0631\u0647 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0644\u0635\u0646\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A.",
    applicationDate: "2021-09-05",
    registrationDate: "2022-03-15",
    validityDate: "2032-03-15",
    address: "Industrial Ward, Al-Mansour, Baghdad, Iraq",
    addressAr: "\u0627\u0644\u062D\u064A \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u060C \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 16473024e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "356002",
    proprietor: "BABYLON TECHNOLOGY SYSTEMS",
    proprietorAr: "\u0628\u0627\u0628\u0644 \u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627",
    trademarkName: "UR SOFTWARE SUITE",
    trademarkNameAr: "\u0628\u0627\u0642\u0629 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0623\u0648\u0631",
    classNumber: 9,
    goodsServices: "Computer software systems; mobile applications; databases for registration; secure cryptographic authorization terminals.",
    goodsServicesAr: "\u0623\u0646\u0638\u0645\u0629 \u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u061B \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u061B \u0642\u0648\u0627\u0639\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0633\u062C\u064A\u0644\u061B \u0645\u062D\u0637\u0627\u062A \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629 \u0627\u0644\u062A\u0634\u0641\u064A\u0631\u064A\u0629 \u0627\u0644\u0622\u0645\u0646\u0629.",
    applicationDate: "2023-01-10",
    registrationDate: "2023-05-20",
    validityDate: "2033-05-20",
    address: "Babylon Square, Hilla, Babylon Governorate, Iraq",
    addressAr: "\u0633\u0627\u062D\u0629 \u0628\u0627\u0628\u0644\u060C \u0627\u0644\u062D\u0644\u0629\u060C \u0645\u062D\u0627\u0641\u0638\u0629 \u0628\u0627\u0628\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 16845408e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "410294",
    proprietor: "TESLA, INC.",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u062A\u064A\u0633\u0644\u0627 \u0627\u0644\u0645\u062D\u062F\u0648\u062F\u0629",
    trademarkName: "TESLA",
    trademarkNameAr: "\u062A\u064A\u0633\u0644\u0627",
    classNumber: 12,
    goodsServices: "Electric land vehicles, namely, electric cars, power units, chassis; batteries, superchargers and engines for electric vehicles; structural parts thereof.",
    goodsServicesAr: "\u0645\u0631\u0643\u0628\u0627\u062A \u0628\u0631\u064A\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u060C \u0648\u0647\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u060C \u0648\u0648\u062D\u062F\u0627\u062A \u0627\u0644\u0637\u0627\u0642\u0629\u060C \u0648\u0647\u064A\u0627\u0643\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A\u061B \u0627\u0644\u0628\u0637\u0627\u0631\u064A\u0627\u062A \u0648\u0627\u0644\u0634\u0648\u0627\u062D\u0646 \u0627\u0644\u0641\u0627\u0626\u0642\u0629 \u0648\u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u061B \u0648\u0623\u062C\u0632\u0627\u0626\u0647\u0627 \u0627\u0644\u0647\u064A\u0643\u0644\u064A\u0629.",
    applicationDate: "2023-03-14",
    registrationDate: "2023-09-14",
    validityDate: "2033-09-14",
    address: "3500 Deer Creek Road, Palo Alto, California, USA",
    addressAr: "\u0663\u0665\u0660\u0660 \u0637\u0631\u064A\u0642 \u062F\u064A\u0631 \u0643\u0631\u064A\u0643\u060C \u0628\u0627\u0644\u0648 \u0623\u0644\u062A\u0648\u060C \u0643\u0627\u0644\u064A\u0641\u0648\u0631\u0646\u064A\u0627\u060C \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
    logoStyle: "stylized-text",
    updatedAt: 16946496e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "421045",
    proprietor: "APPLE INC.",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0623\u0628\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629",
    trademarkName: "APPLE",
    trademarkNameAr: "\u0623\u0628\u0644",
    classNumber: 9,
    goodsServices: "Smart phones, computer hardware, digital music players, personal digital assistants, network software, operating systems, tablet computers.",
    goodsServicesAr: "\u0627\u0644\u0647\u0648\u0627\u062A\u0641 \u0627\u0644\u0630\u0643\u064A\u0629\u060C \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u0645\u0634\u063A\u0644\u0627\u062A \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u0649 \u0627\u0644\u0631\u0642\u0645\u064A\u0629\u060C \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629\u060C \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0627\u0644\u0634\u0628\u0643\u0627\u062A\u060C \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u060C \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0627\u0644\u0644\u0648\u062D\u064A\u0629.",
    applicationDate: "2023-07-06",
    registrationDate: "2024-01-10",
    validityDate: "2034-01-10",
    address: "One Apple Park Way, Cupertino, California, USA",
    addressAr: "\u0648\u0627\u0646 \u0623\u0628\u0644 \u0628\u0627\u0631\u0643 \u0648\u0627\u064A\u060C \u0643\u0648\u0628\u0631\u062A\u064A\u0646\u0648\u060C \u0643\u0627\u0644\u064A\u0641\u0648\u0631\u0646\u064A\u0627\u060C \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
    logoStyle: "stylized-text",
    updatedAt: 17048448e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "430891",
    proprietor: "PEPSICO, INC.",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0628\u064A\u0628\u0633\u064A\u0643\u0648 \u0627\u0644\u0645\u062D\u062F\u0648\u062F\u0629",
    trademarkName: "PEPSI-COLA",
    trademarkNameAr: "\u0628\u064A\u0628\u0633\u064A \u0643\u0648\u0644\u0627",
    classNumber: 32,
    goodsServices: "Carbonated non-alcoholic soft drinks; syrups, concentrates, powders, and preparations for making mineral and aerated waters and beverages.",
    goodsServicesAr: "\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u063A\u0627\u0632\u064A\u0629 \u063A\u064A\u0631 \u0643\u062D\u0648\u0644\u064A\u0629\u061B \u0634\u0631\u0627\u0628\u060C \u0645\u0631\u0643\u0632\u0627\u062A\u060C \u0645\u0633\u0627\u062D\u064A\u0642\u060C \u0648\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0644\u0635\u0646\u0639 \u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0648\u0627\u0644\u063A\u0627\u0632\u064A\u0629 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A.",
    applicationDate: "2022-05-02",
    registrationDate: "2022-11-05",
    validityDate: "2032-11-05",
    address: "700 Anderson Hill Road, Purchase, New York, USA",
    addressAr: "\u0667\u0660\u0660 \u0637\u0631\u064A\u0642 \u0623\u0646\u062F\u0631\u0633\u0648\u0646 \u0647\u064A\u0644\u060C \u0628\u064A\u0631\u062A\u0634\u0627\u064A\u0633\u060C \u0646\u064A\u0648\u064A\u0648\u0631\u0643\u060C \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
    logoStyle: "stylized-text",
    updatedAt: 16676064e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "438201",
    proprietor: "AL-RAFIDAIN PAINTS AND CHEMICAL CO",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0631\u0627\u0641\u062F\u064A\u0646 \u0644\u0644\u0623\u0635\u0628\u0627\u063A \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0643\u064A\u0645\u0627\u0648\u064A\u0629",
    trademarkName: "RAFIDAIN PAINTS",
    trademarkNameAr: "\u0623\u0635\u0628\u0627\u063A \u0627\u0644\u0631\u0627\u0641\u062F\u064A\u0646",
    classNumber: 2,
    goodsServices: "Paints, varnishes, lacquers; preservatives against rust and against deterioration of wood; colorants, mordants; raw natural resins.",
    goodsServicesAr: "\u0627\u0644\u062F\u0647\u0627\u0646\u0627\u062A\u060C \u0627\u0644\u0648\u0631\u0646\u064A\u0634\u060C \u0648\u0627\u0644\u0644\u0627\u0643\u064A\u0647\u061B \u0648\u0627\u0642\u064A\u0627\u062A \u0627\u0644\u0635\u062F\u0623 \u0648\u0645\u0646\u0639 \u062A\u0644\u0641 \u0627\u0644\u0623\u062E\u0634\u0627\u0628\u061B \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u0644\u0648\u0646\u0629\u060C \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0645\u062B\u0628\u062A\u0629 \u0644\u0644\u0623\u0644\u0648\u0627\u0646\u061B \u0627\u0644\u0631\u0627\u062A\u0646\u062C\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0627\u0644\u062E\u0627\u0645.",
    applicationDate: "2023-06-18",
    registrationDate: "2023-12-18",
    validityDate: "2033-12-18",
    address: "Industrial Area East, Erbil, Iraq",
    addressAr: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629 \u0627\u0644\u0634\u0631\u0642\u064A\u0629\u060C \u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 17028576e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "440192",
    proprietor: "AL-MAHA SEED & AGRICULTURE INT",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0647\u0627 \u0644\u0644\u062D\u0628\u0648\u0628 \u0648\u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629",
    trademarkName: "MAHA GREEN",
    trademarkNameAr: "\u0627\u0644\u0645\u0647\u0627 \u0627\u0644\u0623\u062E\u0636\u0631",
    classNumber: 31,
    goodsServices: "Agricultural seeds, forestry grains, fresh fruits and organic vegetables; plant seeds, natural flowers and crop seedlings.",
    goodsServicesAr: "\u0627\u0644\u0628\u0630\u0648\u0631 \u0627\u0644\u0632\u0631\u0627\u0639\u064A\u0629\u060C \u062D\u0628\u0648\u0628 \u0627\u0644\u063A\u0627\u0628\u0627\u062A\u060C \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0627\u0644\u0637\u0627\u0632\u062C\u0629 \u0648\u0627\u0644\u062E\u0636\u0631\u0648\u0627\u062A \u0627\u0644\u0639\u0636\u0648\u064A\u0629\u061B \u0628\u0630\u0648\u0631 \u0627\u0644\u0646\u0628\u0627\u062A\u0627\u062A\u060C \u0627\u0644\u0632\u0647\u0648\u0631 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0648\u0634\u062A\u0644\u0627\u062A \u0627\u0644\u0645\u062D\u0627\u0635\u064A\u0644.",
    applicationDate: "2023-12-25",
    registrationDate: "2024-06-25",
    validityDate: "2034-06-25",
    address: "Al-Mansour Quarter, Baghdad, Iraq",
    addressAr: "\u062D\u064A \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 17192736e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "448920",
    proprietor: "SINOPEC CHONGQING COIL CO.",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0633\u064A\u0646\u0648\u0628\u0643 \u062A\u0634\u0648\u0646\u063A\u062A\u0634\u064A\u0646\u063A \u0644\u0644\u0645\u062D\u0627\u0645\u0644",
    trademarkName: "SINOPEC LUBRI",
    trademarkNameAr: "\u0633\u064A\u0646\u0648\u0628\u0643 \u0644\u0648\u0628\u0631\u064A",
    classNumber: 4,
    goodsServices: "Industrial lubricants, motor oils, grease, paraffin wax, petroleum petroleum fuels and high-temperature machinery fluids.",
    goodsServicesAr: "\u0632\u064A\u0648\u062A \u0627\u0644\u062A\u0634\u062D\u064A\u0645 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629\u060C \u0632\u064A\u0648\u062A \u0627\u0644\u0645\u062D\u0631\u0643\u0627\u062A\u060C \u0627\u0644\u0634\u062D\u0648\u0645\u060C \u0634\u0645\u0639 \u0627\u0644\u0628\u0627\u0631\u0627\u0641\u064A\u0646\u060C \u0648\u0642\u0648\u062F \u0627\u0644\u0628\u062A\u0631\u0648\u0644 \u0648\u0633\u0648\u0627\u0626\u0644 \u0627\u0644\u0622\u0644\u0627\u062A \u0630\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629.",
    applicationDate: "2024-08-14",
    registrationDate: "2025-02-14",
    validityDate: "2035-02-14",
    address: "Chongqing High Tech District, Chongqing, China",
    addressAr: "\u0645\u0646\u0637\u0642\u0629 \u062A\u0634\u0648\u0646\u063A\u062A\u0634\u064A\u0646\u063A \u0644\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u064A\u0629\u060C \u062A\u0634\u0648\u0646\u063A\u062A\u0634\u064A\u0646\u063A\u060C \u0627\u0644\u0635\u064A\u0646",
    logoStyle: "stylized-text",
    updatedAt: 17394912e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "452097",
    proprietor: "MICROSOFT CORPORATION",
    proprietorAr: "\u0634\u0631\u0643\u0629 \u0645\u0627\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629",
    trademarkName: "WINDOWS IRAQ",
    trademarkNameAr: "\u0648\u064A\u0646\u062F\u0648\u0632 \u0627\u0644\u0639\u0631\u0627\u0642",
    classNumber: 42,
    goodsServices: "Cloud computing services, design of computer software, technical translation services for operating systems, networks support.",
    goodsServicesAr: "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062D\u0648\u0633\u0628\u0629 \u0627\u0644\u0633\u062D\u0627\u0628\u064A\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0628\u0631\u0645\u062C\u064A\u0627\u062A \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u0631\u062C\u0645\u0629 \u0627\u0644\u0641\u0646\u064A\u0629 \u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u060C \u062F\u0639\u0645 \u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644.",
    applicationDate: "2025-02-10",
    registrationDate: "2025-08-30",
    validityDate: "2035-08-30",
    address: "One Microsoft Way, Redmond, Washington, USA",
    addressAr: "\u0648\u0627\u0646 \u0645\u0627\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0648\u0627\u064A\u060C \u0631\u064A\u062F\u0645\u0648\u0646\u062F\u060C \u0648\u0627\u0634\u0646\u0637\u0646\u060C \u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
    logoStyle: "stylized-text",
    updatedAt: 1756512e6,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "459302",
    proprietor: "ERBIL AL-SULTAN SWEETS & CO",
    proprietorAr: "\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0633\u0644\u0637\u0627\u0646 \u0648\u0623\u0648\u0644\u0627\u062F\u0647 - \u0623\u0631\u0628\u064A\u0644",
    trademarkName: "AL-SULTAN BAKLAVA",
    trademarkNameAr: "\u0628\u0642\u0644\u0627\u0648\u0629 \u0627\u0644\u0633\u0644\u0637\u0627\u0646",
    classNumber: 30,
    goodsServices: "Pastries, traditional sweets, baklava, confectionery, sugar confectionery, and bakery flour preparations.",
    goodsServicesAr: "\u0627\u0644\u0645\u0639\u062C\u0646\u0627\u062A\u060C \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0642\u064A\u0629 \u0648\u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629\u060C \u0627\u0644\u0628\u0642\u0644\u0627\u0648\u0629\u060C \u0627\u0644\u0633\u0643\u0627\u0643\u0631\u060C \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0633\u0643\u0631\u064A\u0629\u060C \u0648\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u062F\u0642\u064A\u0642 \u0627\u0644\u0645\u062E\u0628\u0648\u0632\u0627\u062A.",
    applicationDate: "2024-05-22",
    registrationDate: "2024-11-22",
    validityDate: "2034-11-22",
    address: "60 Meter Street, Erbil, Iraq",
    addressAr: "\u0634\u0627\u0631\u0639 \u0666\u0660 \u0645\u062A\u0631\u064A\u060C \u0623\u0631\u0628\u064A\u0644\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 17322336e5,
    status: "active",
    syncStatus: "synced"
  },
  {
    id: "462100",
    proprietor: "IRAQI AIRWAYS COMPANY",
    proprietorAr: "\u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062E\u0637\u0648\u0637 \u0627\u0644\u062C\u0648\u064A\u0629 \u0627\u0644\u0639\u0631\u0627\u0642\u064A\u0629",
    trademarkName: "GREEN EAGLE FLYER",
    trademarkNameAr: "\u0637\u0627\u0626\u0631 \u0627\u0644\u0646\u0633\u0631 \u0627\u0644\u0623\u062E\u0636\u0631",
    classNumber: 39,
    goodsServices: "Commercial air transport services of passengers, items and cargo; airline charter planning and travel agency booking.",
    goodsServicesAr: "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u062C\u0648\u064A \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0648\u0627\u0644\u0623\u0645\u062A\u0639\u0629 \u0648\u0627\u0644\u0628\u0636\u0627\u0626\u0639\u061B \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0639\u0627\u0631\u0636 \u0648\u062D\u062C\u0632 \u0648\u0643\u0627\u0644\u0627\u062A \u0627\u0644\u0633\u0641\u0631 \u0648\u0627\u0644\u0633\u064A\u0627\u062D\u0629.",
    applicationDate: "2025-07-18",
    registrationDate: "2026-01-18",
    validityDate: "2036-01-18",
    address: "Baghdad International Airport Area, Baghdad, Iraq",
    addressAr: "\u0645\u0646\u0637\u0642\u0629 \u0645\u0637\u0627\u0631 \u0628\u063A\u062F\u0627\u062F \u0627\u0644\u062F\u0648\u0644\u064A\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642",
    logoStyle: "stylized-text",
    updatedAt: 17686944e5,
    status: "active",
    syncStatus: "synced"
  }
];
function readDatabase() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (import_fs.default.existsSync(DATA_FILE)) {
      const raw = import_fs.default.readFileSync(DATA_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (parsed.length < 6) {
        console.log("Legacy low-fidelity database detected. Overwriting with premium historical seed set.");
        import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(SEED_TRADEMARKS, null, 2), "utf8");
        return SEED_TRADEMARKS;
      }
      return parsed;
    }
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(SEED_TRADEMARKS, null, 2), "utf8");
    return SEED_TRADEMARKS;
  } catch (err) {
    console.error("Error reading database file, returning seed:", err);
    return SEED_TRADEMARKS;
  }
}
function writeDatabase(data) {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    import_fs.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing to database file:", err);
  }
}
readDatabase();
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", geminiConfigured: !!ai, clientIp: req.ip });
});
app.get("/api/trademarks", (req, res) => {
  const data = readDatabase();
  res.json(data);
});
app.post("/api/trademarks", (req, res) => {
  const newRecord = req.body;
  if (!newRecord.id) {
    res.status(400).json({ error: "Missing Trademark Registration ID" });
    return;
  }
  const database = readDatabase();
  const index = database.findIndex((t) => t.id === newRecord.id);
  const updatedRecord = {
    ...newRecord,
    updatedAt: Date.now(),
    syncStatus: "synced"
  };
  if (index >= 0) {
    database[index] = updatedRecord;
  } else {
    database.push(updatedRecord);
  }
  writeDatabase(database);
  res.json(updatedRecord);
});
app.post("/api/trademarks/sync", (req, res) => {
  const clientPayload = req.body;
  if (!clientPayload || !Array.isArray(clientPayload.records)) {
    res.status(400).json({ error: "Invalid sync request format" });
    return;
  }
  const serverDb = readDatabase();
  const serverMap = new Map(serverDb.map((r) => [r.id, r]));
  const clientRecords = clientPayload.records;
  const conflictsToReport = [];
  const mergedMap = new Map(serverMap);
  for (const clientRec of clientRecords) {
    const serverRec = serverMap.get(clientRec.id);
    if (!serverRec) {
      const syncedClientRec = {
        ...clientRec,
        syncStatus: "synced"
      };
      mergedMap.set(clientRec.id, syncedClientRec);
    } else {
      if (clientRec.updatedAt > serverRec.updatedAt) {
        const syncedClientRec = {
          ...clientRec,
          syncStatus: "synced"
        };
        mergedMap.set(clientRec.id, syncedClientRec);
      } else if (clientRec.updatedAt < serverRec.updatedAt) {
      } else {
        if (JSON.stringify(serverRec) !== JSON.stringify({ ...clientRec, syncStatus: "synced" })) {
          conflictsToReport.push({
            id: clientRec.id,
            local: clientRec,
            remote: serverRec
          });
        }
      }
    }
  }
  const finalMergedList = Array.from(mergedMap.values());
  writeDatabase(finalMergedList);
  res.json({
    mergedRecords: finalMergedList,
    conflictRecords: conflictsToReport,
    serverTime: Date.now()
  });
});
app.post("/api/gemini/translate", async (req, res) => {
  const { text, type } = req.body;
  if (!text) {
    res.status(400).json({ error: "Missing text input" });
    return;
  }
  const generateRandomHistoricalDates = () => {
    const startYear = 2022;
    const endYear = 2026;
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const pad = (num) => num.toString().padStart(2, "0");
    const appDateStr = `${year}-${pad(month)}-${pad(day)}`;
    let regMonth = month + 6;
    let regYear = year;
    if (regMonth > 12) {
      regMonth -= 12;
      regYear += 1;
    }
    const regDateStr = `${regYear}-${pad(regMonth)}-${pad(day)}`;
    const valYear = year + 10;
    const valDateStr = `${valYear}-${pad(month)}-${pad(day)}`;
    return { applicationDate: appDateStr, registrationDate: regDateStr, validityDate: valDateStr };
  };
  const getFallbackTranslation = (input, mode) => {
    const term = input.trim().toUpperCase();
    const dates = generateRandomHistoricalDates();
    if (mode === "ar_to_en") {
      if (term === "\u0625\u0645 \u062F\u064A \u0623\u0648\u0632\u0627\u0644" || term === "\u0645\u062D\u0645\u062F \u0623\u0648\u0632\u0627\u0644") return "MD UZZAL";
      if (term === "\u0645\u0631\u0627\u0633\u0644 \u0627\u0644\u063A\u0631\u0628\u064A\u0629 \u0661") return "MURASIL AL-GHARBIYA 1";
      if (term.includes("\u0645\u064A\u0627\u0647")) return "Tigris Refined Mineral Water";
      if (term.includes("\u0634\u0631\u0643\u0629")) return "Al-Mansour Trading Company";
      if (term.includes("\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627")) return "Al-Rafidain technology systems";
      return `Translated (${input})`;
    } else if (mode === "en_to_ar") {
      if (term === "MD UZZAL") return "\u0625\u0645 \u062F\u064A \u0623\u0648\u0632\u0627\u0644";
      if (term === "MURASIL AL-GHARBIYA 1") return "\u0645\u0631\u0627\u0633\u0644 \u0627\u0644\u063A\u0631\u0628\u064A\u0629 \u0661";
      if (term.includes("WATER")) return "\u0645\u064A\u0627\u0647 \u062F\u062C\u0644\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629";
      if (term.includes("NEWS")) return "\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0628\u062B \u0648\u0627\u0644\u0635\u062D\u0627\u0641\u0629 \u0627\u0644\u0625\u062E\u0628\u0627\u0631\u064A\u0629";
      if (term.includes("SOLUTIONS")) return "\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629";
      return `\u0645\u062A\u0631\u062C\u0645 (${input})`;
    } else if (mode === "goods_spec") {
      return "Suggested Bilingual Clause / \u0627\u0644\u0628\u0646\u062F \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0627\u0644\u0645\u0642\u062A\u0631\u062D: Official goods registered under standard Ministry of Trade conditions (\u0645\u0633\u062C\u0644 \u0631\u0633\u0645\u064A\u0627\u064B \u0628\u0645\u0648\u062C\u0628 \u0634\u0631\u0648\u0637 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629).";
    } else {
      let brandAr = "";
      let brandEn = "";
      const containsArabic = /[\u0600-\u06FF]/.test(input);
      if (containsArabic) {
        brandAr = input.replace(/['"]/g, "").trim();
        if (brandAr.includes("\u0623\u0648\u0632\u0627\u0644") || brandAr.includes("\u0627\u0648\u0632\u0627\u0644")) brandEn = "MD UZZAL";
        else if (brandAr.includes("\u062F\u062C\u0644\u0629")) brandEn = "TIGRIS";
        else if (brandAr.includes("\u0628\u0627\u0628\u0644")) brandEn = "BABYLON";
        else if (brandAr.includes("\u0627\u0644\u0641\u0631\u0627\u062A")) brandEn = "EUPHRATES";
        else if (brandAr.includes("\u0627\u0644\u0639\u0631\u0627\u0642")) brandEn = "IRAQ BRAND";
        else brandEn = "AL-RAFIDAIN";
      } else {
        brandEn = input.replace(/['"]/g, "").trim().toUpperCase();
        const brandLower2 = brandEn.toLowerCase();
        if (brandLower2.includes("uzzal")) brandAr = "\u0625\u0645 \u062F\u064A \u0623\u0648\u0632\u0627\u0644";
        else if (brandLower2.includes("tigris")) brandAr = "\u062F\u062C\u0644\u0629";
        else if (brandLower2.includes("babylon")) brandAr = "\u0628\u0627\u0628\u0644";
        else if (brandLower2.includes("euphrates")) brandAr = "\u0627\u0644\u0641\u0631\u0627\u062A";
        else if (brandLower2.includes("tesla")) brandAr = "\u062A\u064A\u0633\u0644\u0627";
        else if (brandLower2.includes("apple")) brandAr = "\u0623\u0628\u0644";
        else if (brandLower2.includes("pepsi")) brandAr = "\u0628\u064A\u0628\u0633\u064A";
        else if (brandLower2.includes("cola")) brandAr = "\u0643\u0648\u0644\u0627";
        else brandAr = `${brandEn} \u0627\u0644\u0639\u0631\u0627\u0642`;
      }
      let suggestedClass = 35;
      let goodsServices = `Scientific research, development and legal protection services; custom retail, import, export and manufacturing protocols for ${brandEn}; general wholesale and retail distribution of commercial goods; strategic business marketing plans, advertising campaigns, and logistical delivery solutions under international Nice class guidelines.`;
      let goodsServicesAr = `\u0623\u0639\u0645\u0627\u0644 \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0639\u0644\u0645\u064A \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0648\u0627\u0644\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629\u061B \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644\u0627\u062A \u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u062A\u062C\u0632\u0626\u0629 \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0648\u0627\u0644\u062A\u0635\u0646\u064A\u0639 \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}\u061B \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0628\u064A\u0639 \u0628\u0627\u0644\u062C\u0645\u0644\u0629 \u0648\u0627\u0644\u062A\u062C\u0632\u0626\u0629 \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0633\u0644\u0639 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u061B \u062E\u0637\u0637 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u0627\u0644\u062D\u0645\u0644\u0627\u062A \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064A\u0629 \u0648\u0627\u0644\u062D\u0644\u0648\u0644 \u0627\u0644\u0644\u0648\u062C\u0633\u062A\u064A\u0629 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr} \u0628\u0645\u0648\u062C\u0628 \u062A\u0635\u0646\u064A\u0641 \u0646\u064A\u0633 \u0627\u0644\u062F\u0648\u0644\u064A.`;
      let address = "Al-Mansour Commercial district, Baghdad, Iraq";
      let addressAr = "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0628\u0627\u0644\u0645\u0646\u0635\u0648\u0631\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u0639\u0631\u0627\u0642";
      const brandLower = brandEn.toLowerCase();
      if (brandLower.includes("coffee") || brandLower.includes("cafe") || brandLower.includes("tea") || brandLower.includes("sweet") || brandLower.includes("bakery") || brandLower.includes("baklava")) {
        suggestedClass = 30;
        goodsServices = `High-quality organic roasted coffee beans, premium blends, decaffeinated coffee grinds, instant coffee mixes; hot and cold tea infusions, herbal teas; sweet bakery goods, authentic traditional Iraqi baklava, pastries, biscuits, sugar confectionery, confectionery flavorings, and preparations for making hot beverages under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u062D\u0628\u0648\u0628 \u0627\u0644\u0628\u0646 \u0627\u0644\u0639\u0636\u0648\u064A\u0629 \u0627\u0644\u0645\u062D\u0645\u0635\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629\u060C \u062E\u0644\u0637\u0627\u062A \u0627\u0644\u0628\u0646 \u0627\u0644\u0645\u0645\u062A\u0627\u0632\u0629\u060C \u0627\u0644\u0628\u0646 \u0627\u0644\u0645\u0637\u062D\u0648\u0646 \u0627\u0644\u062E\u0627\u0644\u064A \u0645\u0646 \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646\u060C \u062E\u0644\u0637\u0627\u062A \u0627\u0644\u0642\u0647\u0648\u0629 \u0633\u0631\u064A\u0639\u0629 \u0627\u0644\u062A\u062D\u0636\u064A\u0631\u061B \u0627\u0644\u0634\u0627\u064A \u0627\u0644\u0633\u0627\u062E\u0646 \u0648\u0627\u0644\u0628\u0627\u0631\u062F\u060C \u0634\u0627\u064A \u0627\u0644\u0623\u0639\u0634\u0627\u0628\u061B \u0627\u0644\u0645\u062E\u0628\u0648\u0632\u0627\u062A \u0627\u0644\u062D\u0644\u0648\u0629\u060C \u0627\u0644\u0628\u0642\u0644\u0627\u0648\u0629 \u0627\u0644\u0639\u0631\u0627\u0642\u064A\u0629 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629\u060C \u0627\u0644\u0645\u0639\u062C\u0646\u0627\u062A\u060C \u0627\u0644\u0628\u0633\u0643\u0648\u064A\u062A\u060C \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0633\u0643\u0631\u064A\u0629\u060C \u0646\u0643\u0647\u0627\u062A \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A\u060C \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0644\u0635\u0646\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u0633\u0627\u062E\u0646\u0629 \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
        address = "Babylon Plaza, Al-Hindiyah district, Karrada, Baghdad, Iraq";
        addressAr = "\u0628\u0627\u0628\u0644 \u0628\u0644\u0627\u0632\u0627\u060C \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0647\u0646\u062F\u064A\u0629\u060C \u0627\u0644\u0643\u0631\u0627\u062F\u0629\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642";
      } else if (brandLower.includes("water") || brandLower.includes("cola") || brandLower.includes("drink") || brandLower.includes("pepsi") || brandLower.includes("juice") || brandLower.includes("soda")) {
        suggestedClass = 32;
        goodsServices = `Pure natural mineral drinking water, purified bottled drinking water, spring waters, carbonated and aerated waters; non-alcoholic soft drinks, energy drinks, isotonic beverages; fruit juices, organic fruit nectars, fruit juice concentrates, syrups and other preparations for making non-alcoholic beverages under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u0645\u064A\u0627\u0647 \u0627\u0644\u0634\u0631\u0628 \u0627\u0644\u0645\u0639\u062F\u0646\u064A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u0627\u0644\u0646\u0642\u064A\u0629\u060C \u0645\u064A\u0627\u0647 \u0627\u0644\u0634\u0631\u0628 \u0627\u0644\u0645\u0639\u0628\u0623\u0629 \u0627\u0644\u0645\u0635\u0641\u0627\u0629\u060C \u0645\u064A\u0627\u0647 \u0627\u0644\u064A\u0646\u0627\u0628\u064A\u0639\u060C \u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u063A\u0627\u0632\u064A\u0629 \u0648\u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0641\u0648\u0627\u0631\u0629\u061B \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u063A\u0627\u0632\u064A\u0629 \u063A\u064A\u0631 \u0627\u0644\u0643\u062D\u0648\u0644\u064A\u0629\u060C \u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u0637\u0627\u0642\u0629\u060C \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629\u061B \u0639\u0635\u0627\u0626\u0631 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u060C \u0646\u0643\u062A\u0627\u0631 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0627\u0644\u0639\u0636\u0648\u064A\u0629\u060C \u0645\u0631\u0643\u0632\u0627\u062A \u0639\u0635\u0627\u0626\u0631 \u0627\u0644\u0641\u0648\u0627\u0643\u0647\u060C \u0634\u0631\u0627\u0628 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0648\u0627\u0644\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649 \u0644\u0635\u0646\u0639 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u063A\u064A\u0631 \u0627\u0644\u0643\u062D\u0648\u0644\u064A\u0629 \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
        address = "Al-Senak Industrial District, Baghdad, Iraq";
        addressAr = "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629 \u0628\u0627\u0644\u0633\u0646\u0643\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642";
      } else if (brandLower.includes("car") || brandLower.includes("vehicle") || brandLower.includes("tesla") || brandLower.includes("motor") || brandLower.includes("toyota") || brandLower.includes("wheel") || brandLower.includes("truck")) {
        suggestedClass = 12;
        goodsServices = `Electric vehicles, structural automotive components, drive electric motors, land transit carriages, safety airbags, braking systems, interior passenger cabins, and parts and fittings for cars, vans and electric transports carrying the trademark name ${brandEn}.`;
        goodsServicesAr = `\u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u060C \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0647\u064A\u0643\u0644\u064A\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A\u060C \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629\u060C \u0639\u0631\u0628\u0627\u062A \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u0628\u0631\u064A\u060C \u0627\u0644\u0648\u0633\u0627\u0626\u062F \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629 \u0644\u0644\u0623\u0645\u0627\u0646\u060C \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0645\u0643\u0627\u0628\u062D\u060C \u0627\u0644\u0643\u0628\u0627\u0626\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629 \u0644\u0644\u0631\u0643\u0627\u0628\u060C \u0648\u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0648\u0627\u0644\u0645\u0644\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0635\u0629 \u0644\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0634\u0627\u062D\u0646\u0627\u062A \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0627\u0644\u062D\u0627\u0645\u0644\u0629 \u0644\u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
      } else if (brandLower.includes("computer") || brandLower.includes("app") || brandLower.includes("software") || brandLower.includes("phone") || brandLower.includes("apple") || brandLower.includes("microsoft") || brandLower.includes("system") || brandLower.includes("security")) {
        suggestedClass = 9;
        goodsServices = `Operating computer software, downloadable mobile security systems applications, cloud database storage nodes, microprocessors, smart electronic tablets, computer peripherals, and encrypted data communication networks under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u0628\u0631\u0627\u0645\u062C \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062D\u0645\u0627\u064A\u0629 \u0644\u0644\u0647\u0648\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644\u0629 \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0632\u064A\u0644\u060C \u0639\u0642\u062F \u062A\u062E\u0632\u064A\u0646 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u062D\u0627\u0628\u064A\u0629\u060C \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0627\u062A \u0627\u0644\u062F\u0642\u064A\u0642\u0629\u060C \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0644\u0648\u062D\u064A\u0629 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0627\u0644\u0630\u0643\u064A\u0629\u060C \u0645\u0644\u062D\u0642\u0627\u062A \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631\u060C \u0648\u0634\u0628\u0643\u0627\u062A \u0646\u0642\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0641\u0631\u0629 \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
        address = "Waziriyah IT Park, Baghdad, Iraq";
        addressAr = "\u0645\u062C\u0645\u0639 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0628\u0627\u0644\u0648\u0632\u064A\u0631\u064A\u0629\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642";
      } else if (brandLower.includes("news") || brandLower.includes("tv") || brandLower.includes("channel") || brandLower.includes("media") || brandLower.includes("radio") || brandLower.includes("buzz") || brandLower.includes("uzzal") || brandLower.includes("murasil")) {
        suggestedClass = 41;
        goodsServices = `Official news reporters services, broadcasting of television over satellite and cable, digital publishing of internet content, audio podcasts, documentary cinema production, and media photography reporting under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u062E\u062F\u0645\u0627\u062A \u0645\u0631\u0627\u0633\u0644\u064A \u0627\u0644\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0631\u0633\u0645\u064A\u0629\u060C \u0627\u0644\u0628\u062B \u0627\u0644\u062A\u0644\u0641\u0632\u064A\u0648\u0646\u064A \u0639\u0628\u0631 \u0627\u0644\u0623\u0642\u0645\u0627\u0631 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0643\u0627\u0628\u0644\u060C \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A\u060C \u0627\u0644\u0628\u0648\u062F\u0643\u0627\u0633\u062A \u0627\u0644\u0635\u0648\u062A\u064A\u060C \u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0627\u0644\u0648\u062B\u0627\u0626\u0642\u064A\u0629\u060C \u0648\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0635\u0648\u0631\u0629 \u0644\u0640 ${brandAr}.`;
      } else if (brandLower.includes("paint") || brandLower.includes("coat") || brandLower.includes("varnish") || brandLower.includes("color")) {
        suggestedClass = 2;
        goodsServices = `Premium industrial paints, anti-rust coatings, protective wood preservation lacquers, interior structural varnishes, and raw pigment colorants for commercial manufacture under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u0627\u0644\u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629 \u0627\u0644\u0641\u0627\u062E\u0631\u0629\u060C \u0637\u0644\u0627\u0621\u0627\u062A \u0645\u0642\u0627\u0648\u0645\u0629 \u0627\u0644\u0635\u062F\u0623\u060C \u0648\u0631\u0646\u064A\u0634 \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0623\u062E\u0634\u0627\u0628 \u0627\u0644\u0648\u0627\u0642\u064A\u060C \u0627\u0644\u0623\u0635\u0628\u0627\u063A \u0627\u0644\u0647\u064A\u0643\u0644\u064A\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629\u060C \u0648\u0627\u0644\u0645\u0644\u0648\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0645 \u0644\u0644\u062A\u0635\u0646\u064A\u0639 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
      } else if (brandLower.includes("medicine") || brandLower.includes("pharma") || brandLower.includes("clinic") || brandLower.includes("medical") || brandLower.includes("health")) {
        suggestedClass = 5;
        goodsServices = `Pharmaceutical preparations for treating metabolic disorders, clinical medical diagnostic reagents, dietary and nutritional supplements, and hygienic chemical disinfecting agents for medical centers under the trademark of ${brandEn}.`;
        goodsServicesAr = `\u0627\u0644\u0645\u0633\u062A\u062D\u0636\u0631\u0627\u062A \u0627\u0644\u0635\u064A\u062F\u0644\u0627\u0646\u064A\u0629 \u0644\u0639\u0644\u0627\u062C \u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u063A\u0630\u0627\u0626\u064A\u060C \u0643\u0648\u0627\u0634\u0641 \u0627\u0644\u062A\u0634\u062E\u064A\u0635 \u0627\u0644\u0637\u0628\u064A \u0627\u0644\u0633\u0631\u064A\u0631\u064A\u060C \u0627\u0644\u0645\u0643\u0645\u0644\u0627\u062A \u0627\u0644\u063A\u0630\u0627\u0626\u064A\u0629 \u0648\u0627\u0644\u063A\u0630\u0627\u0626\u064A\u0629 \u0627\u0644\u062E\u0627\u0635\u0629\u060C \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0639\u0642\u0645\u0629 \u0644\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0637\u0628\u064A\u0629 \u0644\u0639\u0644\u0627\u0645\u0629 ${brandAr}.`;
        address = "Bab Al-Moadham Medical Hub, Baghdad, Iraq";
        addressAr = "\u0627\u0644\u0645\u062C\u0645\u0639 \u0627\u0644\u0637\u0628\u064A \u0628\u0628\u0627\u0628 \u0627\u0644\u0645\u0639\u0638\u0645\u060C \u0628\u063A\u062F\u0627\u062F\u060C \u0627\u0644\u0639\u0631\u0627\u0642";
      }
      return JSON.stringify({
        trademarkName: brandEn,
        trademarkNameAr: brandAr,
        proprietor: `${brandEn} HOLDINGS CORP`,
        proprietorAr: `\u0634\u0631\u0643\u0629 ${brandAr} \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629`,
        classNumber: suggestedClass,
        goodsServices,
        goodsServicesAr,
        address,
        addressAr,
        applicationDate: dates.applicationDate,
        registrationDate: dates.registrationDate,
        validityDate: dates.validityDate,
        isMock: true
      });
    }
  };
  if (!ai) {
    const mockRep = getFallbackTranslation(text, type);
    if (type === "auto_gen") {
      res.json(JSON.parse(mockRep));
    } else {
      res.json({
        translatedText: mockRep,
        isMock: true,
        suggestedClass: type === "goods_spec" ? text.toLowerCase().includes("news") ? 41 : 32 : void 0
      });
    }
    return;
  }
  try {
    let prompt = "";
    if (type === "ar_to_en") {
      prompt = `You are an expert bilingual legal translator for the Republic of Iraq Ministry of Trade Trademark Registry. Translate this Arabic trademark field or proprietor name to clear, official English (in ALL CAPS for name, or normal Title Case if address). Do not write anything else but the direct English translation.

Text: ${text}`;
    } else if (type === "en_to_ar") {
      prompt = `You are an expert bilingual legal translator for the Republic of Iraq Ministry of Trade Trademark Registry. Translate this English trademark name, proprietor name or address to authentic standard Arabic (\u0641\u0635\u062D\u0649) used in Iraqi official records. Do not write anything else but the direct Arabic translation.

Text: ${text}`;
    } else if (type === "goods_spec") {
      prompt = `You are an expert Iraq Trademark Classification assistant. Design a highly professional bilingual (English and Arabic) specification of Goods and Services based on this raw input description: "${text}". 
      Also, classify this description into one of the 45 international trademark classes (NICE classification).
      Return your answer strictly as a JSON object with two fields (do not use any Markdown block wrapper, write raw JSON):
      {
        "translatedText": "English translation / Arabic translation format separating clauses with semicolons",
        "suggestedClass": 41 (Integer class between 1 and 45)
      }`;
    } else if (type === "auto_gen") {
      prompt = `You are a legal registrar in charge of the Republic of Iraq Ministry of Trade Intellectual Property ledger. 
      I will give you a brand name or category concept, and you must automatically generate a highly realistic, legally compliant trademark registration profile.
      
      Input Brand Concept: "${text}"
      
      Determine the correct International Nice Classification class (integer between 1 and 45) matching this concept, and output a detailed goods/services clause in BOTH professional English and official administrative Arabic.
      
      CRITICAL INSTRUCTIONS:
      - AUTO TRANSLATION & TRANSLITERATION: Whichever language the Input Brand Concept is entered in (Arabic, English, Spanish, Bengali, etc.), you must detect the brand name, and translate/transliterate it consistently for BOTH:
        1. trademarkName: Capitalized English transliteration/translation of the brand name (e.g., 'MD UZZAL GROUP', 'TIGRIS COFFEE', 'AL-KARRADA NEWS').
        2. trademarkNameAr: Official, authentic Arabic translation/transliteration of the brand name (e.g., '\u0645\u062C\u0645\u0648\u0639\u0629 \u0625\u0645 \u062F\u064A \u0623\u0648\u0632\u0627\u0644', '\u0642\u0647\u0648\u0629 \u062F\u062C\u0644\u0629', '\u0623\u062E\u0628\u0627\u0631 \u0627\u0644\u0643\u0631\u0627\u062F\u0629').
        The two fields MUST represent the exact same brand name in English and Arabic. They must not diverge or hallucinate separate names.
      - DETAILED EXHAUSTIVE SPECIFICATIONS: Make "goodsServices" and "goodsServicesAr" extremely detailed, consisting of multiple long lines/sentences (at least 3-4 comprehensive lines of professional boilerplates) detailing the respective goods/services of the brand.
      
      Also formulate:
      - Proprietor Name (representative of a corporate entity containing the translated brand name - English and Arabic)
      - Realistic address in Iraq (e.g. Al-Mansour, Al-Karrada, or Erbil), representing offices in BOTH English and Arabic.
      
      You MUST return your answer strictly as a raw JSON string. Do not markdown wrap it in \`\`\`json. The output MUST exactly follow this schema:
      {
        "trademarkName": "TRADEMARK NAME IN CAPITAL ENGLISH",
        "trademarkNameAr": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        "proprietor": "PROPRIETOR CORPORATE NAME IN CAPITAL ENGLISH",
        "proprietorAr": "\u0627\u0633\u0645 \u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        "classNumber": 9 (an Integer from 1 to 45 matching the Nice class of the brand),
        "goodsServices": "Exhaustive legal specification clause of goods and services in English summarizing the brand category (multiple sentences, high line count)",
        "goodsServicesAr": "\u0635\u064A\u063A\u0629 \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0645\u0637\u0648\u0644\u0629 \u0644\u0644\u0633\u0644\u0639 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0641\u0635\u062D\u0649 (\u062C\u0645\u0644 \u0645\u062A\u0639\u062F\u062F\u0629 \u0648\u0633\u0637\u0648\u0631 \u0643\u062B\u064A\u0631\u0629)",
        "address": "Official business street address in Iraq (English)",
        "addressAr": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A \u0641\u064A \u0627\u0644\u0639\u0631\u0627\u0642 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"
      }
      
      Make the terms incredibly premium, official, and authentic sounding, avoiding generic placeholders.`;
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: type === "goods_spec" || type === "auto_gen" ? "application/json" : "text/plain",
        systemInstruction: "You are an official bilingual legal registrar specializing in Iraqi trademark registrations and Nice international goods classifications."
      }
    });
    const resultText = response.text || "";
    if (type === "goods_spec") {
      try {
        const parsed = JSON.parse(resultText.trim());
        res.json({
          translatedText: parsed.translatedText,
          suggestedClass: parsed.suggestedClass,
          isMock: false
        });
      } catch (parseErr) {
        res.json({
          translatedText: resultText,
          suggestedClass: text.toLowerCase().includes("news") ? 41 : 32,
          isMock: false
        });
      }
    } else if (type === "auto_gen") {
      try {
        const parsed = JSON.parse(resultText.trim());
        const dates = generateRandomHistoricalDates();
        res.json({
          ...parsed,
          applicationDate: dates.applicationDate,
          registrationDate: dates.registrationDate,
          validityDate: dates.validityDate,
          isMock: false
        });
      } catch (parseErr) {
        const fallback = JSON.parse(getFallbackTranslation(text, "auto_gen"));
        res.json(fallback);
      }
    } else {
      res.json({
        translatedText: resultText.trim(),
        isMock: false
      });
    }
  } catch (err) {
    console.error("Gemini Translation API call failed, reverting to simulation fallback:", err);
    if (type === "auto_gen") {
      const fallback = JSON.parse(getFallbackTranslation(text, "auto_gen"));
      res.json(fallback);
    } else {
      res.json({
        translatedText: getFallbackTranslation(text, type),
        isMock: true,
        errorLog: err.message,
        suggestedClass: type === "goods_spec" ? text.toLowerCase().includes("news") ? 41 : 9 : void 0
      });
    }
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(` Iraq Trademark Database Server listening on http://localhost:${PORT}`);
  });
}
startServer();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=server.cjs.map
