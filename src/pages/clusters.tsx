import React from "react";
import {Button} from "@nextui-org/react";

export default function Clusters() {
    return (
        <div>
        <Button className="cluster-button" color="primary" variant="shadow">Cluster 1</Button>
        <Button className="cluster-button" color="secondary" variant="flat">Cluster 2</Button>
        <Button className="cluster-button" color="danger" variant="flat">Cluster 3</Button>
        <Button className="cluster-button" color="warning" variant="flat">Cluster 4</Button>
        </div>
    );
}