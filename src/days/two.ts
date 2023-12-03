/* DAY 2 - 1 */

function parseGame(data: string[]) {
  return data.map((game) => {
    let splitedGames = game
      .split(": ")[1]
      .split(";")
      .map((game) => {
        return game.split(",").map((game) => {
          const split = game.trim().split(" ");
          return {
            [split[1]]: Number(split[0]),
          };
        });
      });

    return splitedGames;
  });
}

/* DAY 2 - 2 */

export function solver21(data: string[]) {
  // 12 rouges - 13 verts - 14 bleus
  const searchResult = [12, 13, 14];

  const games = parseGame(data);

  return games.reduce((acc, game, index) => {
    const gameResult = [true, true, true];
    game.forEach((round) => {
      round.forEach((score) => {
        switch (Object.keys(score)[0]) {
          case "red":
            if (gameResult[0]) gameResult[0] = score.red <= searchResult[0];
            break;
          case "green":
            if (gameResult[1]) gameResult[1] = score.green <= searchResult[1];
            break;
          case "blue":
            if (gameResult[2]) gameResult[2] = score.blue <= searchResult[2];
            break;
        }
      });
    });

    if (gameResult[0] && gameResult[1] && gameResult[2]) {
      acc += index + 1;
    }

    return acc;
  }, 0);
}

export function solver22(data: string[]) {
  const games = parseGame(data);

  return games.reduce((totalAcc, game) => {
    const gameTab = game.reduce(
      (acc, round) => {
        round.forEach((score) => {
          switch (Object.keys(score)[0]) {
            case "red":
              if (score.red > acc[0]) acc[0] = score.red;
              break;
            case "green":
              if (score.green > acc[1]) acc[1] = score.green;
              break;
            case "blue":
              if (score.blue > acc[2]) acc[2] = score.blue;
              break;
          }
        });
        return acc;
      },
      [0, 0, 0]
    );

    totalAcc += gameTab.reduce((acc, score) => acc * score, 1);

    return totalAcc;
  }, 0);
}
