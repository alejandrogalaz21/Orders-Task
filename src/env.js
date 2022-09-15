import dotenv from 'dotenv'

/**
 * Initialize environment variables.
 */
const dotenvResult = dotenv.config()
if (dotenvResult.error) {
  console.error(dotenvResult.parsed)
}
