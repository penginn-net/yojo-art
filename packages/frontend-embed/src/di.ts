/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as Misskey from 'cherrypick-js';
import { MediaProxy } from '@@/js/media-proxy.js';
import type { InjectionKey } from 'vue';
import type { ParsedEmbedParams } from '@@/js/embed-page.js';

export const DI = {
	serverMetadata: Symbol() as InjectionKey<Misskey.entities.MetaDetailed>,
	embedParams: Symbol() as InjectionKey<ParsedEmbedParams>,
	mediaProxy: Symbol() as InjectionKey<MediaProxy>,
};
