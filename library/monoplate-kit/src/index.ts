import chalk from "chalk"
import * as clack from "@clack/prompts"
import { execa } from "execa"
import { z } from "zod"
import figlet from "figlet"
import gradient from "gradient-string"

export const showLogo = (): void => {
  const logo = figlet.textSync("Monoplate", {
    font: "ANSI Shadow",
    verticalLayout: "default",
    whitespaceBreak: true,
  })

  console.log(gradient(["AE53A0", "7D6DBC"]).multiline(logo))
}

export type Log = z.infer<typeof LogSchema>
const LogSchema = z.object({
  message: z.string(),
  logType: z.enum(["error", "info", "warn", "complete"]),
  tag: z.string().optional()
})

export const log = (logData: Log): void => {
	const { message, logType, tag } = logData
	const logMessage = tag ? `[${tag}] ${message}` : message

	switch (logType) {
		case "complete":
			console.log(chalk.green(logMessage))
			break
		case "error":
			console.log(chalk.red(logMessage))
			break
		case "info":
			console.log(chalk.blue(logMessage))
			break
		case "warn":
			console.log(chalk.yellow(logMessage))
			break
	}
}

export const prompts = async (
	option: Parameters<typeof clack.group>[0],
): Promise<ReturnType<typeof clack.group>> => {
	const data = await clack.group(option)
	return data
}

export type NewLine = z.infer<typeof newLineSchema>
const newLineSchema = z.number().optional()

export const newLine = (number?: NewLine): void => {
	// 無指定の場合は1行に設定
	number = number ?? 1

	for (let i = 0; i < number; i++) {
		console.log()
	}
}

export const runCLI = async (command: string, options: string[]): Promise<number | undefined> => {
	newLine()
	console.log(`> ${command} ${options.join(" ")}`)

	const { exitCode } = await execa(command, options, { 
		stdio: "inherit",
		reject: false
	})

	newLine()
	return exitCode
}
