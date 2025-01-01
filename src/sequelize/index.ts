import { Sequelize, Options } from "sequelize";

class SequelizeWrapper {
    private _client: Sequelize | undefined = undefined;

    connect(dbOptions: Options) {
        this._client = new Sequelize(dbOptions)
    }

    get client() {
        if (!this._client)
            throw new Error('Cannot get client before connecting')
        return this._client
    }
}

const sequelizeWrapper = new SequelizeWrapper()
export default sequelizeWrapper;