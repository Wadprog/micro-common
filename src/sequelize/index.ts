import { Sequelize } from 'sequelize';

interface DbSettings {
    host: string;
    dialect: string;
    database: string;
    username: string;
    password: string;
}
class SequelizeWrapper {
    public _sequelize: undefined | Sequelize;


    constructor() { }
    get sequelize() {

        if (!this._sequelize)
            throw new Error('Sequelize is not connected');
        return this._sequelize;
    }

    connect(dbSettings: DbSettings) {
        // @ts-ignore
        this._sequelize = new Sequelize({
            logging: false,
            ...dbSettings,
            seederStorge: 'sequelize',
        });
    }

    startSequelize() {
        const { models } = this.sequelize;
        Object.keys(models).forEach((name) => {
            if ('associate' in models[name]) {
                (models[name] as any).associate(models);
            }
        });
    }

}

export const sequelizeWrapper = new SequelizeWrapper();