# GPU CNN afterstate experiment

Validation-selected CNN: **cnn_d4**, seed 43.

| Group | Held-out mean score | Reached 2048 | Model-game pairs | Truncated |
|---|---:|---:|---:|---:|
| cnn | 9369.18 | 3.7% | 900 | 0 |
| cnn_d4 | 13927.83 | 18.7% | 900 | 0 |
| pair_d4 | 9940.64 | 7.4% | 900 | 0 |
| previous_ntuple_curriculum | 17165.05 | 19.9% | 900 | 0 |

All CNN training and batched CNN inference used CUDA. Evaluation starts from two random tiles, with no curriculum restarts.
The same test game seeds are reused across models; model-game pairs are not independent game-seed suites.
All CNN groups share optimizer, replay ratio, environment-step budget and curriculum settings. D4 averaging adds compute; paired input adds stem parameters.
Historical n-tuple comparison is not an isolated architecture ablation: its online updates differ from CNN replay.
Sources match the launch manifest: True. This invocation took 36.1 minutes.
Total completed-trial training and validation time: 163.1 minutes.

Continued with the original training and evaluation sources and protocol. Completed trials were reused and incomplete trials were archived and restarted from their original seeds.

## Per-model held-out results

| Group | Training seed | Mean score | Reached 2048 |
|---|---:|---:|---:|
| cnn | 42 | 9189.64 | 2/300 (0.7%) |
| cnn | 43 | 9866.19 | 7/300 (2.3%) |
| cnn | 44 | 9051.71 | 24/300 (8.0%) |
| cnn_d4 | 42 | 10999.53 | 9/300 (3.0%) |
| cnn_d4 | 43 | 16048.85 | 87/300 (29.0%) |
| cnn_d4 | 44 | 14735.11 | 72/300 (24.0%) |
| pair_d4 | 42 | 9575.44 | 4/300 (1.3%) |
| pair_d4 | 43 | 8049.81 | 25/300 (8.3%) |
| pair_d4 | 44 | 12196.67 | 38/300 (12.7%) |
| previous_ntuple_curriculum | 42 | 17533.56 | 66/300 (22.0%) |
| previous_ntuple_curriculum | 43 | 17509.80 | 68/300 (22.7%) |
| previous_ntuple_curriculum | 44 | 16451.79 | 45/300 (15.0%) |

D4 averaging raised the 2048 rate by 15.0 percentage points relative to plain CNN. Both mean score and 2048 rate improved in all three matched training seeds.
Adding the pre-move board reduced both metrics in all three matched D4 seeds. The single-input D4 models still averaged 1.2 percentage points and 3,237 score points below the historical n-tuple H models on the same test seeds.

The validation-selected CNN checkpoint (D4, seed 43, 3,000,000 steps) reached 2048 in 87/300 held-out games. The three-seed D4 average was 18.7%, with individual rates from 3.0% to 29.0%.

Verified all 3,600 game records against the scheduled seeds and reported scores. Every game terminated naturally. Checkpoint selection preceded held-out output, and the champion is byte-identical to the selected checkpoint. The command-line player loaded the champion and completed a separate headless game.

[Validation and held-out plots](cnn_results.png)
