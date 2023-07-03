const fs = require("fs");
const readline = require("readline");
const path = require("path");

var list = [
  {
    text: "第一章",
    items: [
      { text: "第 1 节 起源与发展", link: "../01.1.md" },
      { text: "第 1 节 起源与发展", link: "../01.1.md" },
      {
        text: "第 2 节 语言的主要特性与发展的环境和影响因素",
        link: "../01.2.md",
      },
    ],
  },
  {
    text: "第二章",
    items: [
      { text: "第 1 节 平台与架构", link: "../02.1.md" },
      { text: "第 1 节 平台与架构", link: "../02.1.md" },
      { text: "第 2 节 Go 环境变量", link: "../02.2.md" },
      { text: "第 3 节 在 Linux 上安装 Go", link: "../02.3.md" },
      { text: "第 4 节 在 Mac OS X 上安装 Go", link: "../02.4.md" },
      { text: "第 5 节 在 Windows 上安装 Go", link: "../02.5.md" },
      { text: "第 6 节 安装目录清单", link: "../02.6.md" },
      { text: "第 7 节 Go 运行时 (runtime)", link: "../02.7.md" },
      { text: "第 8 节 Go 解释器", link: "../02.8.md" },
    ],
  },
  {
    text: "第三章",
    items: [
      { text: "前言", link: "../03.0.md" },
      { text: "第 1 节", link: "../03.1.md" },
      { text: "第 2 节", link: "../03.2.md" },
      { text: "第 3 节", link: "../03.3.md" },
      { text: "第 4 节", link: "../03.4.md" },
      { text: "第 5 节", link: "../03.5.md" },
      { text: "第 6 节", link: "../03.6.md" },
      { text: "第 7 节", link: "../03.7.md" },
      { text: "第 8 节", link: "../03.8.md" },
      { text: "第 9 节", link: "../03.9.md" },
    ],
  },
  {
    text: "第四章",
    items: [
      { text: "第 1 节", link: "../04.1.md" },
      { text: "第 1 节", link: "../04.1.md" },
      { text: "第 2 节", link: "../04.2.md" },
      { text: "第 3 节", link: "../04.3.md" },
      { text: "第 4 节", link: "../04.4.md" },
      { text: "第 5 节", link: "../04.5.md" },
      { text: "第 6 节", link: "../04.6.md" },
      { text: "第 7 节", link: "../04.7.md" },
      { text: "第 8 节", link: "../04.8.md" },
      { text: "第 9 节", link: "../04.9.md" },
    ],
  },
  {
    text: "第五章",
    items: [
      { text: "前言", link: "../05.0.md" },
      { text: "第 1 节", link: "../05.1.md" },
      { text: "第 2 节", link: "../05.2.md" },
      { text: "第 3 节", link: "../05.3.md" },
      { text: "第 4 节", link: "../05.4.md" },
      { text: "第 5 节", link: "../05.5.md" },
      { text: "第 6 节", link: "../05.6.md" },
    ],
  },
  {
    text: "第六章",
    items: [
      { text: "前言", link: "../06.0.md" },
      { text: "第 1 节", link: "../06.1.md" },
      { text: "第 2 节", link: "../06.2.md" },
      { text: "第 3 节", link: "../06.3.md" },
      { text: "第 4 节", link: "../06.4.md" },
      { text: "第 5 节", link: "../06.5.md" },
      { text: "第 6 节", link: "../06.6.md" },
      { text: "第 7 节", link: "../06.7.md" },
      { text: "第 8 节", link: "../06.8.md" },
      { text: "第 9 节", link: "../06.9.md" },
      { text: "第 10 节", link: "../06.10.md" },
      { text: "第 11 节", link: "../06.11.md" },
      { text: "第 12 节", link: "../06.12.md" },
    ],
  },
  {
    text: "第七章",
    items: [
      { text: "前言", link: "../07.0.md" },
      { text: "第 1 节", link: "../07.1.md" },
      { text: "第 2 节", link: "../07.2.md" },
      { text: "第 3 节", link: "../07.3.md" },
      { text: "第 4 节", link: "../07.4.md" },
      { text: "第 5 节", link: "../07.5.md" },
      { text: "第 6 节", link: "../07.6.md" },
    ],
  },
  {
    text: "第八章",
    items: [
      { text: "前言", link: "../08.0.md" },
      { text: "第 1 节", link: "../08.1.md" },
      { text: "第 2 节", link: "../08.2.md" },
      { text: "第 3 节", link: "../08.3.md" },
      { text: "第 4 节", link: "../08.4.md" },
      { text: "第 5 节", link: "../08.5.md" },
      { text: "第 6 节", link: "../08.6.md" },
    ],
  },
  {
    text: "第九章",
    items: [
      { text: "前言", link: "../09.0.md" },
      { text: "第 1 节", link: "../09.1.md" },
      { text: "第 2 节", link: "../09.2.md" },
      { text: "第 3 节", link: "../09.3.md" },
      { text: "第 4 节", link: "../09.4.md" },
      { text: "第 5 节", link: "../09.5.md" },
      { text: "第 6 节", link: "../09.6.md" },
      { text: "第 7 节", link: "../09.7.md" },
      { text: "第 8 节", link: "../09.8.md" },
      { text: "第 9 节", link: "../09.9.md" },
      { text: "第 10 节", link: "../09.10.md" },
      { text: "第 11 节", link: "../09.11.md" },
    ],
  },
  {
    text: "第十章",
    items: [
      { text: "前言", link: "../10.0.md" },
      { text: "第 1 节", link: "../10.1.md" },
      { text: "第 2 节", link: "../10.2.md" },
      { text: "第 3 节", link: "../10.3.md" },
      { text: "第 4 节", link: "../10.4.md" },
      { text: "第 5 节", link: "../10.5.md" },
      { text: "第 6 节", link: "../10.6.md" },
      { text: "第 7 节", link: "../10.7.md" },
      { text: "第 8 节", link: "../10.8.md" },
    ],
  },
  {
    text: "第十一章",
    items: [
      { text: "前言", link: "../11.0.md" },
      { text: "第 1 节", link: "../11.1.md" },
      { text: "第 2 节", link: "../11.2.md" },
      { text: "第 3 节", link: "../11.3.md" },
      { text: "第 4 节", link: "../11.4.md" },
      { text: "第 5 节", link: "../11.5.md" },
      { text: "第 6 节", link: "../11.6.md" },
      { text: "第 7 节", link: "../11.7.md" },
      { text: "第 8 节", link: "../11.8.md" },
      { text: "第 9 节", link: "../11.9.md" },
      { text: "第 10 节", link: "../11.10.md" },
      { text: "第 11 节", link: "../11.11.md" },
      { text: "第 12 节", link: "../11.12.md" },
      { text: "第 13 节", link: "../11.13.md" },
      { text: "第 14 节", link: "../11.14.md" },
    ],
  },
  {
    text: "第十二章",
    items: [
      { text: "前言", link: "../12.0.md" },
      { text: "第 1 节", link: "../12.1.md" },
      { text: "第 2 节", link: "../12.2.md" },
      { text: "第 3 节", link: "../12.3.md" },
      { text: "第 4 节", link: "../12.4.md" },
      { text: "第 5 节", link: "../12.5.md" },
      { text: "第 6 节", link: "../12.6.md" },
      { text: "第 7 节", link: "../12.7.md" },
      { text: "第 8 节", link: "../12.8.md" },
      { text: "第 9 节", link: "../12.9.md" },
      { text: "第 10 节", link: "../12.10.md" },
      { text: "第 11 节", link: "../12.11.md" },
      { text: "第 12 节", link: "../12.12.md" },
    ],
  },
  {
    text: "第十三章",
    items: [
      { text: "前言", link: "../13.0.md" },
      { text: "第 1 节", link: "../13.1.md" },
      { text: "第 2 节", link: "../13.2.md" },
      { text: "第 3 节", link: "../13.3.md" },
      { text: "第 4 节", link: "../13.4.md" },
      { text: "第 5 节", link: "../13.5.md" },
      { text: "第 6 节", link: "../13.6.md" },
      { text: "第 7 节", link: "../13.7.md" },
      { text: "第 8 节", link: "../13.8.md" },
      { text: "第 9 节", link: "../13.9.md" },
      { text: "第 10 节", link: "../13.10.md" },
    ],
  },
  {
    text: "第十四章",
    items: [
      { text: "前言", link: "../14.0.md" },
      { text: "第 1 节", link: "../14.1.md" },
      { text: "第 2 节", link: "../14.2.md" },
      { text: "第 3 节", link: "../14.3.md" },
      { text: "第 4 节", link: "../14.4.md" },
      { text: "第 5 节", link: "../14.5.md" },
      { text: "第 6 节", link: "../14.6.md" },
      { text: "第 7 节", link: "../14.7.md" },
      { text: "第 8 节", link: "../14.8.md" },
      { text: "第 9 节", link: "../14.9.md" },
      { text: "第 10 节", link: "../14.10.md" },
      { text: "第 11 节", link: "../14.11.md" },
      { text: "第 12 节", link: "../14.12.md" },
      { text: "第 13 节", link: "../14.13.md" },
      { text: "第 14 节", link: "../14.14.md" },
      { text: "第 15 节", link: "../14.15.md" },
      { text: "第 16 节", link: "../14.16.md" },
      { text: "第 17 节", link: "../14.17.md" },
    ],
  },
  {
    text: "第十五章",
    items: [
      { text: "前言", link: "../15.0.md" },
      { text: "第 1 节", link: "../15.1.md" },
      { text: "第 2 节", link: "../15.2.md" },
      { text: "第 3 节", link: "../15.3.md" },
      { text: "第 4 节", link: "../15.4.md" },
      { text: "第 5 节", link: "../15.5.md" },
      { text: "第 6 节", link: "../15.6.md" },
      { text: "第 7 节", link: "../15.7.md" },
      { text: "第 8 节", link: "../15.8.md" },
      { text: "第 9 节", link: "../15.9.md" },
      { text: "第 10 节", link: "../15.10.md" },
      { text: "第 11 节", link: "../15.11.md" },
      { text: "第 12 节", link: "../15.12.md" },
    ],
  },
  {
    text: "第十六章",
    items: [
      { text: "前言", link: "../16.0.md" },
      { text: "第 1 节", link: "../16.1.md" },
      { text: "第 2 节", link: "../16.2.md" },
      { text: "第 3 节", link: "../16.3.md" },
      { text: "第 4 节", link: "../16.4.md" },
      { text: "第 5 节", link: "../16.5.md" },
      { text: "第 6 节", link: "../16.6.md" },
      { text: "第 7 节", link: "../16.7.md" },
      { text: "第 8 节", link: "../16.8.md" },
      { text: "第 9 节", link: "../16.9.md" },
      { text: "第 10 节", link: "../16.10.md" },
    ],
  },
  {
    text: "第十七章",
    items: [
      { text: "前言", link: "../17.0.md" },
      { text: "第 1 节", link: "../17.1.md" },
      { text: "第 2 节", link: "../17.2.md" },
      { text: "第 3 节", link: "../17.3.md" },
      { text: "第 4 节", link: "../17.4.md" },
    ],
  },
  {
    text: "第十八章",
    items: [
      { text: "前言", link: "../18.0.md" },
      { text: "第 1 节", link: "../18.1.md" },
      { text: "第 2 节", link: "../18.2.md" },
      { text: "第 3 节", link: "../18.3.md" },
      { text: "第 4 节", link: "../18.4.md" },
      { text: "第 5 节", link: "../18.5.md" },
      { text: "第 6 节", link: "../18.6.md" },
      { text: "第 7 节", link: "../18.7.md" },
      { text: "第 8 节", link: "../18.8.md" },
      { text: "第 9 节", link: "../18.9.md" },
      { text: "第 10 节", link: "../18.10.md" },
      { text: "第 11 节", link: "../18.11.md" },
    ],
  },
  {
    text: "第十九章",
    items: [
      { text: "前言", link: "../19.0.md" },
      { text: "第 1 节", link: "../19.1.md" },
      { text: "第 2 节", link: "../19.2.md" },
      { text: "第 3 节", link: "../19.3.md" },
      { text: "第 4 节", link: "../19.4.md" },
      { text: "第 5 节", link: "../19.5.md" },
      { text: "第 6 节", link: "../19.6.md" },
      { text: "第 7 节", link: "../19.7.md" },
      { text: "第 8 节", link: "../19.8.md" },
      { text: "第 9 节", link: "../19.9.md" },
      { text: "第 10 节", link: "../19.10.md" },
    ],
  },
  {
    text: "第二十章",
    items: [
      { text: "前言", link: "../20.0.md" },
      { text: "第 1 节", link: "../20.1.md" },
      { text: "第 2 节", link: "../20.2.md" },
      { text: "第 3 节", link: "../20.3.md" },
      { text: "第 4 节", link: "../20.4.md" },
      { text: "第 5 节", link: "../20.5.md" },
      { text: "第 6 节", link: "../20.6.md" },
      { text: "第 7 节", link: "../20.7.md" },
      { text: "第 8 节", link: "../20.8.md" },
    ],
  },
  {
    text: "第二十一章",
    items: [
      { text: "前言", link: "../21.0.md" },
      { text: "第 1 节", link: "../21.1.md" },
      { text: "第 2 节", link: "../21.2.md" },
      { text: "第 3 节", link: "../21.3.md" },
      { text: "第 4 节", link: "../21.4.md" },
      { text: "第 5 节", link: "../21.5.md" },
    ],
  },
];

// 定义目标目录
const targetDirectory = "./eBook";

// 读取目录
fs.readdir(targetDirectory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  // 遍历目录下的文件
  files.forEach((file) => {
    // 判断是否为文件夹
    const isDirectory = fs.statSync(`${targetDirectory}/${file}`).isDirectory();

    // 输出文件名和目录
    if (
      !isDirectory &&
      file.indexOf(".md") > -1 &&
      /^[0-9]/.test(file) &&
      !file.startsWith("Discussion_about")
    ) {
      // console.log(`${file} - ${isDirectory ? "directory" : "file"}`);
      const fileStream = fs.createReadStream(
        path.resolve(__dirname + "/" + file)
      );

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      rl.on("line", (line) => {
        if (line.startsWith("# ")) {
          // console.log(line.substring(2).trim());
          const regex = /^[\s\S]*?(?=[^\s\d]\.)/;
          console.log(file, /^[0-9]/.test(file));
          if (/^[0-9]/.test(file)) {
            const [f, s] = file.split(".");

            

            list[f - 1].items[s].text = (
              line.substring(2).trim() || ""
            ).replace(regex, "");
          }

          rl.close();
        }
      });
    }
  });

  setTimeout(() => {
    console.log(JSON.stringify(list));
  }, 2500)
});
