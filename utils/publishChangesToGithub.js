/* Author: Sotiris Konstantis */

const { exec } = require("child_process");

async function publishChangesToGithub(directory) {
    return new Promise((resolve, reject) => {
      exec(`cd ${directory} && git add .`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error adding changes: ${stderr}`);
          reject(err);
          return;
        }
        exec(`cd ${directory} && git commit -m "Automated commit of tomorrow's risk map"`, (err, stdout, stderr) => {
          if (err) {
            console.error(`Error committing changes: ${stderr}`);
            reject(err);
            return;
          }
          exec(`cd ${directory} && git push`, (err, stdout, stderr) => {
            if (err) {
              console.error(`Error pushing changes: ${stderr}`);
              reject(err);
              return;
            }
            console.log("Changes pushed to GitHub successfully.");
            resolve(true);
          });
        });
      });
    });
  }

module.exports = publishChangesToGithub;