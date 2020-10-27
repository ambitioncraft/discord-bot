import {CliConfig} from '@ambitioncraft/cli/lib/config'

export interface DiscordBotConfig extends CliConfig {
  discord: Discord;
}

export type Discord = {
  channels: { [key: string]: string };
  commandPrefix: string;
  token: string;
  roles: {
    [tagName: string]: {
      commands: string[];
    };
    '*': {
      commands: string[];
    };
  };
}
