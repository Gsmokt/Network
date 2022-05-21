import { input } from "./Input.js";

class Network {
  constructor(network) {
    this.network = network;
  }

  checkNode(i, x, connection, node = this.network[x].split(" ").slice(1)) {
    
    if (i > connection.length - 2) {
      console.log("false");
      return;
    }

    if (
        connection[i] + connection[i + 1] === node[0] + node[1] ||
        connection[i] + connection[i + 1] === node[1] + node[0]
    ) {
      console.log("true");
      return;
    }

    return this.checkNode(++i, x, connection);
  }

  checkNetwork() {
    let connection = [];
    const buildNetwork = (x) => {
      if (x > this.network.length - 1) return connection;
      this.network[x].includes("B")
        ? (connection = [...connection, ...this.network[x].split(" ").slice(1)])
        : this.checkNode(0, x, connection);
      return buildNetwork(++x);
    };
    return buildNetwork;
  }
}

const net = new Network(input).checkNetwork();
net(0);




