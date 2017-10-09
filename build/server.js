"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
var cors = require("cors");
// import routers
var PostRouter_1 = require("./router/PostRouter");
var UserRouter_1 = require("./router/UserRouter");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        //set up mongoose
        var MONGO_URI = 'mongodb://localhost/NodeRESTTSMONGODB';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL);
        //config
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
        //this.app.use(logger('dev'));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/posts', PostRouter_1.default);
        this.app.use('/api/v1/users', UserRouter_1.default);
    };
    return Server;
}());
exports.default = new Server().app;
