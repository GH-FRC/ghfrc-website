import { describe, expect, it, vi } from 'vitest';
import { createAchievementSoundPlayer } from '../src/sound-player';

function audioFixture() {
  const start = vi.fn();
  const parameter = () => ({ setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() });
  const context = {
    state: 'running', currentTime: 0, destination: {}, close: vi.fn().mockResolvedValue(undefined),
    createGain: () => ({ gain: parameter(), connect: vi.fn(), disconnect: vi.fn() }),
    createOscillator: () => ({ frequency: parameter(), connect: vi.fn(), disconnect: vi.fn(), start, stop: vi.fn() }),
  };
  const AudioContext = vi.fn(function () { return context; });
  const browser = { AudioContext } as unknown as Window & typeof globalThis;
  return { player: createAchievementSoundPlayer(browser), AudioContext, start };
}

describe('achievement sound activation', () => {
  it('waits for interaction even if the browser permits autoplay, then starts both tones', async () => {
    const { player, AudioContext, start } = audioFixture();
    await expect(player.prepare()).rejects.toThrow('first page interaction');
    expect(AudioContext).not.toHaveBeenCalled();
    const sound = await player.prepare({ userActivation: true });
    expect(start).not.toHaveBeenCalled();
    sound.start();
    expect(start).toHaveBeenCalledTimes(2);
    sound.dispose();
    player.destroy();
  });

  it('allows the next queued achievement after the initial interaction', async () => {
    const { player, AudioContext } = audioFixture();
    const first = await player.prepare({ userActivation: true });
    first.start();
    first.dispose();
    const next = await player.prepare();
    expect(AudioContext).toHaveBeenCalledOnce();
    next.dispose();
    player.destroy();
  });
});
