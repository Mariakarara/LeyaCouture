import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { category: Category } = prisma;

const categoryController = {
  getAll(req, res) {
    Category.findMany()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.statut(500).send({
          message: "an arror accourded",
        });
      });
  },
  get(req, res) {
    const { id } = req.params;
    Category.findUnique({
      where: {
        id: parseInt(id),
      },
    })
      .then((data) => {
        data
          ? res.status(200).send(data)
          : res.status(404).send({ message: `cannot find id=${id}` });
      })
      .catch((error) => {
        res.status(500).send({
          message: `an arror accourded when retryving users with id=${id}`,
        });
      });
  },

  create(req, res) {
    const { id } = req.params;
    const { Robes } = req.body;

    Category.create({
      where: {
        id: parseInt(id),
      },
      data: {
        Robes: Robes,
      },
    })
      .then(() => {
        res
          .status(201)
          .send({ message: "New category was created successfully" });
      })
      .catch((error) => {
        res.status(500).send({
          message: "an arror accourded when creating new category",
        });
      });
  },

  update(req, res) {
    const { id } = req.params;
    const { Robes } = req.body;

    Category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        Robes: Robes,
      },
    })
      .then(() => {
        res.status(200).send({ message: "user was updated successfully" });
      })
      .catch((error) => {
        res.status(500).send({
          message: `an arror accourded when updating user with id=${id}`,
        });
      });
  },

  delete(req, res) {
    const { id } = req.params;
    Category.delate({
      where: {
        id: parseInt(id),
      },
    })
      .then((data) => {
        res.status(200).send({ message: `cannot find id=${id}` });
      })
      .catch((error) => {
        res
          .status(500)
          .send({ message: `an arror accourded when deleting with id=${id}` });
      });
  },
};

export default categoryController;
