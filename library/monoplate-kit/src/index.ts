import chalk from "chalk"
import * as clack from "@clack/prompts"
import { execa } from "execa"

export const log = (
	message: string,
	logType: "error" | "info" | "warn" | "complete",
	tag?: string,
): void => {
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

export const newLine = (number?: number): void => {
	// 無指定の場合は1行に設定
	number = number ?? 1

	for (let i = 0; i < number; i++) {
		console.log()
	}
}

export const runCli = async (command: string, options: string[]): Promise<number | undefined> => {
	newLine()
	console.log(`> ${command} ${options.join(" ")}`)

	newLine()
	const { exitCode } = await execa(command, options, { 
		stdio: "inherit",
		reject: false
	})

	newLine()
	return exitCode
}
