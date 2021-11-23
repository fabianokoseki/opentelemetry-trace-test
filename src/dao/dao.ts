import logger from "../../logger";

export class DaoTest {

    readonly BATCH_DELAY = 3000

    async fetchDataFromDB() {
        logger.info("Reached DAO...")
        return await this.simulateDB();
    }

    private async simulateDB(): Promise<Object> {
        await new Promise(resolve => {
            logger.info(`Fetching data from the database...`)
            setTimeout(resolve, this.BATCH_DELAY)
        });
        const result = {
            "data": "true"
        }
        logger.info("Result: ", result)
        return result
    }

}